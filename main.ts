input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    Espacio += 1
    if (Espacio == 1) {
        makerbit.showStringOnLcd1602("" + (Letras[Codigo.indexOf(Letra)]), Posicion, 1)
        Posicion += 1
        if (Posicion > 31) {
            Posicion = 0
        }
        Letra = ""
        Espacio = 0
    } else {
        Posicion += 1
        if (Posicion > 31) {
            Posicion = 0
        }
        Letra = ""
        Espacio = 0
    }
})
function Pulsacion () {
    if (input.buttonIsPressed(Button.A)) {
        pushed = 1
        tpo_pulsacion = control.millis()
        while (input.buttonIsPressed(Button.A)) {
        	
        }
        tpo_pulsacion = control.millis() - tpo_pulsacion
        push = control.millis()
        if (tpo_pulsacion > 250) {
            Cadena = "" + Cadena + "-"
        } else {
            Cadena = "" + Cadena + "."
        }
    }
    if (pushed == 1 && control.millis() - push > 800) {
        basic.showString("" + (Cadena[Codigo.indexOf(Letra)]))
        makerbit.showStringOnLcd1602("" + (Cadena[Codigo.indexOf(Letra)]), Posicion, 1)
        Posicion += 1
        if (Posicion > 31) {
            makerbit.clearLcd1602()
            Posicion = 0
        }
        pushed = 2
        Cadena = ""
    }
    if (pushed == 2 && control.millis() - push > 3000) {
        basic.showIcon(IconNames.SmallDiamond)
        pushed = 0
    }
}
input.onButtonPressed(Button.B, function () {
    Letra = "" + Letra + "-"
})
let push = 0
let tpo_pulsacion = 0
let pushed = 0
let Posicion = 0
let Letra = ""
let Espacio = 0
let Codigo: string[] = []
let Letras: string[] = []
let Cadena = ""
makerbit.connectLcd(39)
makerbit.setLcdBacklight(LcdBacklight.On)
makerbit.clearLcd1602()
Cadena = ""
Letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", ",", ";", ":", "?", "!", "WAIT", "UNDERSTAND", "DNU", "CALL", "FINISH"]
Codigo = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----", ".....", ".-.-.-", ".,.,.,", "---...", "..--..", "--..--", "-..", "...-.", "-...-.", "-.-.-", ".-.-."]
basic.forever(function () {
    Pulsacion()
})
