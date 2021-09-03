export const activity = `from datetime import datetime
print('Bem vindo ao programa!\n')
print('Neste programa, será criado um arquivo de texto')
print('e escrito alguma informação dentro dele!\n\n')


def defineTexto():
    texto = input(
        'insira o texto a ser escrito no arquivo (ou apenas pressione enter):')
    if texto == '':
        texto = 'Este é o texto padrão!'
    return texto


with open("saida.txt", "w") as file:
    horario = '\nArquivo modificado em ' + datetime.today().strftime(
        '%d-%m-%Y %H:%M')
    file.write(defineTexto())
    file.write(horario)
print('Verifique seu novo arquivo de texto!')
file.close()
`
