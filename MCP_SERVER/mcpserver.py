def evaluate_vcb(data):

    timing_ok = (
        data["close_r"] <= 85 and
        data["close_y"] <= 85 and
        data["close_b"] <= 85 and
        data["open_r"] <= 80 and
        data["open_y"] <= 80 and
        data["open_b"] <= 80
    )

    ir_ok = (
        data["rr"] >= 500 and
        data["yy"] >= 500 and
        data["bb"] >= 500 and
        data["ry"] >= 500 and
        data["yb"] >= 500 and
        data["br"] >= 500 and
        data["re"] >= 500 and
        data["ye"] >= 500 and
        data["be"] >= 500
    )

    crm_ok = (
        data["crm_r"] <= 100 and
        data["crm_y"] <= 100 and
        data["crm_b"] <= 100
    )

    accessories_ok = (
        5 <= data["motor_operator"] <= 10 and
        50 <= data["closing_coil"] <= 70 and
        50 <= data["tripping_coil"] <= 70 and
        200 <= data["additional_trip_coil"] <= 300
    )

    mechanical_ok = (
        data["open_close_operation"] == "OK" and
        data["close_coil_status"] == "OK" and
        data["trip_coil_status"] == "OK" and
        data["spring_motor_status"] == "OK" and
        data["racking_mechanism"] == "OK" and
        data["rack_in_operation"] == "OK" and
        data["shutter_operation"] == "OK" and
        data["general_appearance"] == "GOOD"
    )

    overall = (
        timing_ok and
        ir_ok and
        crm_ok and
        accessories_ok and
        mechanical_ok
    )

    return {
        "status": "SAFE" if overall else "NOT SAFE",
        "timing_status": timing_ok,
        "ir_status": ir_ok,
        "crm_status": crm_ok,
        "accessories_status": accessories_ok,
        "mechanical_status": mechanical_ok
    }


def maintenance_advice(status):

    if status == "NOT SAFE":
        return "VCB maintenance required. Check failed parameters."

    return "VCB operating within OEM limits."