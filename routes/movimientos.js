import Router from "router";
import { check } from "express-validator";
import validarCampos from "../middlewares/validarCampos.js";
import { validarJWT } from "../middlewares/validarjwt.js";
import helperMovimientos from "../helpers/movimientos.js";
const router = Router();
import {
    postMovimientos,
    putMovimientos,
    getMovimientos,
    getMovimiento,
    getActivosinactivos,
    putActivarInactivar,
    getMovimientoTipo,
    getMovimientosFechas
} from "../controllers/movimientos.js";


router.post("/",[
    validarJWT,
    check("tipo","el tipo debe ser un numero").isNumeric(),
    check("numeroFactura","la factura debe ser un texto").isString(),
    check("fecha","el formato de la fecha es incorrecto").isString(),
    check("articulos","articulos debe ser un array").isArray(),
    check("articulos.*.id","el id no es valido").isMongoId(),
    check("articulos.*.id","el id no existe").custom(helperMovimientos.validarIdArticulo),
    check("articulos.*.cantidad","cantidad debe ser un numero").isNumeric(),
    check("valor","debe ser un valor numerico").isNumeric(),
    check("total","debe ser un valor numerico").isNumeric(),
    check("estado","el estado debe ser 0 o 1").optional().isInt({min:0, max:1}),
    validarCampos
], postMovimientos);


router.put("/actualizar/:ide",[
    validarJWT,
    check("ide","el id no es valido").isMongoId(),
    check("ide","el id no existe").custom(helperMovimientos.validarId),
    validarCampos
],putMovimientos);


router.get("/movimientos",[
    validarJWT,
], getMovimientos);


router.get("/movimiento/:id",[
    validarJWT,
    check("id","el id no es valido").isMongoId(),
    check("id","el id no existe").custom(helperMovimientos.validarId),
    validarCampos
], getMovimiento);


router.get("/movimientos/:accion",[
    validarJWT
], getActivosinactivos);


router.put("/:accion/:id",[
    validarJWT,
    check("id","el id no es valido").isMongoId(),
    check("id","el id no existe").custom(helperMovimientos.validarId),
    validarCampos
], putActivarInactivar);



router.get("/tipo/:tipo",[
    validarJWT
],getMovimientoTipo)


router.get("/fechas/:fechaInicio/:fechaFin",[
    validarJWT,
    check("fechaInicio","la fecha no es valida debe ser algo como esto '2024-05-01'").isDate(),
    check("fechaFin","la fecha no es valida debe ser algo como esto '2024-05-01'").isDate(),
    validarCampos
],getMovimientosFechas)

export default router;
