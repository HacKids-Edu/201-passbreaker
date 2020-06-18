input.onButtonPressed(Button.A, function () {
    basic.showString("Senhas:")
    for (let Item0 = 0; Item0 <= 3; Item0++) {
        a = NumerosPossiveis[Item0]
        for (let Item1 = 0; Item1 <= NumerosPossiveis[Item1]; Item1++) {
            b = NumerosPossiveis[Item1]
            for (let Item2 = 0; Item2 <= 3; Item2++) {
                c = NumerosPossiveis[Item2]
                for (let Item3 = 0; Item3 <= 3; Item3++) {
                    d = NumerosPossiveis[Item3]
                    if (a != b && (a != c && (a != d && (b != c && (b != d && c != d))))) {
                        basic.showString("" + convertToText(a) + convertToText(b) + convertToText(c) + convertToText(d) + "|")
                    }
                }
            }
        }
    }
})
let d = 0
let c = 0
let b = 0
let a = 0
let NumerosPossiveis: number[] = []
NumerosPossiveis = [2, 5, 7, 9]
let SenhasPossiveis: number[] = []
