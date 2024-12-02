import express from 'express'; 
import { check } from 'express-validator';
import validarCampos from '../middlewares/validarCampos.js';
import { validarJWT } from '../middlewares/validarjwt.js';
import helperArticulos from '../helpers/articulos.js';
const router = express.Router();  
import {
    postArticulos,
    putArticulos,
    getArticulos,
    getArticulo,
    getArticulosActivos,
    getArticulosInactivos,
    putActivar,
    putInactivar,
    getCategorias,
    getArticuloStock
} from '../controllers/articulos.js'

router.post("/",[
    validarJWT,
    check("nombre","el  nombre es obligatorio").notEmpty(),
    check("nombre","el nombre no puede tener mas de 40 caracteres").isLength({max:40}),
    check("precio","el precio es obligatorio").notEmpty(),
    check("precio","el precio debe ser un valor numerico").isNumeric(),
    check("precio", "el precio debe ser un numero mayor a 0").isFloat({gt:0}),
    check("imagen","la imagen es obligatoria").notEmpty(),
    // check("la imagen debe ser una URL de texto").isString(),
    check("imagen","la imagen debe ser una URL valida").isURL(),
    check("categoria","la categoria no puede estar vacia").notEmpty(),
    check("categoria","la categoria debe ser un texto").isString(),
    check("estado","el estado debe ser 0 o 1").optional().isInt({min:0, max:1}),
    validarCampos
],postArticulos)


router.put("/articulo/:id",[
    validarJWT,
    check("id","el id no es valido").isMongoId(),
    check("id","el  id no existe en la base de datos").custom(helperArticulos.validarId),
    validarCampos
], putArticulos)


router.get("/articulos",[
    validarJWT
], getArticulos)


router.get("/articulo/:id",[
    validarJWT,
    check("id","el  id no es valido").isMongoId(),
    check("id","el  id no existe").custom(helperArticulos.validarId),
    validarCampos
], getArticulo)

router.get("/activos",[
    validarJWT
], getArticulosActivos)


router.get("/inactivos",[
    validarJWT
], getArticulosInactivos)


router.put("/activar/:id",[
    validarJWT,
    check("id","el id no es valido").isMongoId(),
    check("id","el  id no existe").custom(helperArticulos.validarId),
    validarCampos
], putActivar)


router.put("/inactivar/:id",[
    validarJWT,
    check("id","el id no es valido").isMongoId(),
    check("id","el  id no existe").custom(helperArticulos.validarId),
    validarCampos
], putInactivar)


router.get("/categoria/:Categoria",[
    validarJWT,
    check("Categoria","debe especificar una categoria").notEmpty(),
    check("Categoria","no hay articulos en esta categoria").custom(helperArticulos.validarCategoria),
    validarCampos
],getCategorias)


router.get("/stock/:cantidad",[
    validarJWT,
    check("cantidad","la cantidad debe ser un numero").isNumeric(),
    validarCampos
],getArticuloStock)
export default router

