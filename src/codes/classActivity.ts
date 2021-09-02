export const activity = `abstract class Pessoa {
	nome: string

	constructor(nome: string) {
		this.nome = nome
	}

	abstract dizerAlgo(mensagem: string): string;
	abstract multiplicar(fator1: number, fator2: number): number;
	abstract somar(parcela1: number, parcela2: number): number;
	abstract subtrair(minuendo: number, subtraendo: number): number;
	abstract dividir(dividendo: number, divisor: number): number;
	abstract calcularRestoDeDivisao(dividendo: number, divisor: number): number;
}

class Aluno extends Pessoa {
	constructor(nome: string) {
		super(nome) // super precisa necessariamente ser chamado em uma classe derivada
	}

	dizerAlgo(mensagem: string) {
		return this.nome + ' disse: ' mensagem
	}
	multiplicar(fator1: number, fator2: number) {
		return fator1 * fator2
	}
	somar(parcela1: number, parcela2: number) {
		return parcela1 + parcela2
	}
	subtrair(minuendo: number, subtraendo: number) {
		return minuendo - subtraendo
	}
	dividir(dividendo: number, divisor: number) {
		return dividendo / divisor
	}
	calcularRestoDeDivisao(dividendo: number, divisor: number) {
		return dividendo % divisor
	}

	main() {
		let mensagem = this.dizerAlgo("Olá mundo!")
		let produto = this.multiplicar(2, 4) // this chama o método, que foi herdada da classe Pessoa, no escopo da classe Aluno.
		let total = this.somar(1, 1)
		let resto = this.subtrair(1, 1)
		let resultado = this.dividir(1, 1)
		let restoDaDivisao = this.calcularRestoDeDivisao(5, 2)

		console.log(mensagem)
		console.log("produto (2x4):", produto)
		console.log("total (1+1):", total)
		console.log("resto (1-1):", resto)
		console.log("resultado (1/1):", resultado)
		console.log("resto da divisão (5/2): ", restoDaDivisao)
	}
}

let ricardo = new Aluno("Ricardo")

ricardo.main()
`
