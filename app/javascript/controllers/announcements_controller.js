import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  close() {
    this.element.classList.add("animate-slide-out")
    setTimeout(() => this.element.remove(), 300)
  }
}
