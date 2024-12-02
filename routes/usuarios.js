import Router from "router";    
import { check } from "express-validator";
import validarCampos from "../middlewares/validarCampos.js";
import helperUsuarios from "../helpers/usuarios.js";
import { validarJWT } from "../middlewares/validarjwt.js";
import {
    postUsuarios,
    putUsuarios,
    getUsuarios,
    getUsuario,
    putActivarInactivar,
    postLogin
} from '../controllers/usuarios.js'
const router = Router()



router.post("/",[
    check("email","el email no puede ir vacio").notEmpty(),
    check("contraseña","la contraseña no debe ir vacia").notEmpty(),
    validarCampos
],postUsuarios)


router.put("/modificar/:id",[
    validarJWT,
    check("id","el id no es valido").isMongoId(),
    check("id","el id no existe").custom(helperUsuarios.validarId),
    validarCampos
],putUsuarios)

router.get("/usuarios",[
    validarJWT,
],getUsuarios)


router.get("/usuario/:id",[
    validarJWT,
    check("id","el id no es valido").isMongoId(),
    check("id","el id no existe").custom(helperUsuarios.validarId),
    validarCampos
],getUsuario)


router.put("/usuario/:accion/:id",[
    validarJWT,
    check("accion","debe digitar 'activar o inactivar'").isIn(["activar","inactivar"]),
    check("id","el id no es valido").isMongoId(),
    check("id","el id no existe").custom(helperUsuarios.validarId),
    validarCampos
], putActivarInactivar)

router.post("/login", [
    // Validar que el email esté en formato correcto
    check("email", "El email no es válido").isEmail(),
    // Validar que el email no esté vacío
    check("email", "El email no puede ir vacío").notEmpty(),
    check("email", "El email ya está registrado").custom(helperUsuarios.emailYaRegistrado),
    // Validar que la contraseña no esté vacía
    check("contraseña", "La contraseña no debe ir vacía").notEmpty(),
    // Validar que la contraseña tenga al menos 6 caracteres (puedes ajustarlo según la política de tu app)
    check("contraseña", "La contraseña debe tener al menos 6 caracteres").isLength({ min: 6 }),
    // Ejecutar la validación de los campos
    postLogin
] );

export default router 