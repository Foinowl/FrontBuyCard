export class Component{
  constructor($id) {
    this.$el = document.getElementById($id)
  }

  init() { }

  onShow() { }
  
  onHide() { }
  
  hide() {
    this.$el.classList.add("hide")
    this.onHide()
  }

  show() {
    this.$el.classList.remove("show")
		this.onShow()
  }
}