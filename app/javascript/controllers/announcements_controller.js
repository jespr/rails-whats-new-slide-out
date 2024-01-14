import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="announcements"
export default class extends Controller {
  close() {
    this.element.remove()
  }
}
