import { Controller } from "@hotwired/stimulus"
import { useClickOutside } from "stimulus-use"

export default class extends Controller {
  connect() {
    useClickOutside(this)
  }

  close() {
    this.element.classList.add("animate-slide-out")
    setTimeout(() => this.element.remove(), 300)
  }

  clickOutside() {
    this.close()
  }
}
