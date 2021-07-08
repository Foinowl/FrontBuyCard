import { Component } from "../core/component"

export class CompletedComponent extends Component {
	constructor(id, nav) {
		super(id)

		this.name = "competed"
		this.nav = nav
	}

	init() {
		this.$el.addEventListener("click", clickPrintButton.bind(this))
	}

	onShow() {
		const html = this.renderInputs()
		this.$el.insertAdjacentHTML("afterbegin", html)
	}

	onHide() {
		this.$el.innerHTML = ""
	}

	setModel(model) {
		this.model = model
	}

	CallPrint() {
		var WinPrint = window.open('', '', 'left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');
		var prtCSS = '<link rel="stylesheet" href="/index.1206e35b.css">'
		

		WinPrint.document.write('');
		WinPrint.document.write(prtCSS)
		WinPrint.document.write(this.renderInputs());
		WinPrint.document.write('');
		WinPrint.document.close();
		WinPrint.focus();
		WinPrint.print();
		WinPrint.close();
}

	renderInputs() {
		return `
	    <p class="checkout__completed-title">Thank you for your order!</p>

      <p>Your order number is: 188787788</p>	
      
      <p class="checkout__email-title">
        Your will recieve an email confirmation shortly to
        <span class="checkout__email-span">${this.model.email}</span>
      </p>
      
      <p>
        Estimated delivery Day is
        <span class="checkout__email-date">Friday 1st April 2016</span>
      </p>

      <button type="submit" class="checkout__print">Print Recipe</button>
		`
	}
}

const clickPrintButton = function (e) {
	e.preventDefault()
	console.log(e);
	if (e.target.className === "checkout__print") {
		this.CallPrint()
	}
}

