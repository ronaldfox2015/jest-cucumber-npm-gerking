Feature: Cambio de url de seleccione en el modulo empresa
    AS usuario comercial
    I cambiar la url de la landing
    So mostrar la información actualizada del servicio de gestión de selección
    Scenario: Cambiar url de landing
        Given que el usuario se encuentra en el home de empresa
        When dé click al botón de "/empresa/seleccion"
        Then se debe redirigir a la url "https://aptitus.com/empresa/servicios/seleccion"



