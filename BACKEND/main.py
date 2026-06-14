from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import sys
import os

# MCP SERVER PATH
sys.path.append(os.path.abspath("../MCP_SERVER"))

from mcpserver import evaluate_vcb, maintenance_advice
from database import collection

app = FastAPI(title="VCB Health Assessment API")


# -------------------------
# CORS
# -------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -------------------------
# INPUT MODEL
# -------------------------
class VCBData(BaseModel):

    # Timing Test
    close_r: float
    close_y: float
    close_b: float

    open_r: float
    open_y: float
    open_b: float

    # IR Test
    rr: float
    yy: float
    bb: float

    ry: float
    yb: float
    br: float

    re: float
    ye: float
    be: float

    # CRM Test
    crm_r: float
    crm_y: float
    crm_b: float

    # Electrical Accessories
    motor_operator: float
    closing_coil: float
    tripping_coil: float
    additional_trip_coil: float

    # Mechanical Inspection
    open_close_operation: str
    close_coil_status: str
    trip_coil_status: str
    spring_motor_status: str
    racking_mechanism: str
    rack_in_operation: str
    shutter_operation: str
    general_appearance: str


# -------------------------
# HOME
# -------------------------
@app.get("/")
def home():
    return {
        "message": "VCB Health Assessment API Running"
    }


# -------------------------
# ANALYZE VCB REPORT
# -------------------------
@app.post("/analyze")
def analyze(data: VCBData):

    report_data = data.model_dump()

    print("Received Data:", report_data)

    result = evaluate_vcb(report_data)

    advice = maintenance_advice(
        result["status"]
    )

    document = {
        **report_data,
        **result,
        "advice": advice
    }

    inserted = collection.insert_one(document)

    print("Saved Report ID:", inserted.inserted_id)

    return {
        "success": True,
        "report_id": str(inserted.inserted_id),
        **result,
        "advice": advice
    }


# -------------------------
# GET ALL REPORTS
# -------------------------
@app.get("/reports")
def get_reports():

    reports = list(
        collection.find().sort("_id", -1)
    )

    for report in reports:
        report["_id"] = str(report["_id"])

    return {
        "success": True,
        "count": len(reports),
        "data": reports
    }