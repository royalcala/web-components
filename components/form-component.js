/**
 * Represents a custom form component.
 * @class
 * @extends HTMLElement
 */
class FormComponent extends HTMLElement {

    /**
     * Returns an array of attribute names to observe for changes.
     * 
     * @returns {Array<string>} The array of attribute names.
     */
    static get observedAttributes() {
      return ['src', 'title', 'styles'];
    }
  
    constructor() {
      super();
      
      this.attachShadow({ mode: 'open' });
    }
  
    /**
     * Called when the custom element is connected to the document's DOM.
     * Fetches form data from the specified source URL.
     * @returns {void}
     */
    connectedCallback() {
      this.fetchFormData(this.getAttribute('src'));
    }
  
    async fetchFormData(src) {
      try {
        const response = await fetch(src);
        const data = await response.json();
        this.renderForm(data);
      } catch (error) {
        console.error('Error fetching form data:', error);
      }
    }
  
    renderForm(data) {
      let styles = this.getAttribute('styles') || `
        form {
          padding: 20px;
          background-color: #f2f2f2;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin: 10px 0;
        }
        h2 {
          margin-bottom: 20px;
          color: #333;
        }
        label {
          font-weight: bold;
          text-transform: uppercase;
          display: block;
          margin-bottom: 5px;
          color: #555;
        }
        input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 3px;
          margin-bottom: 20px;
          box-sizing: border-box;
        }
        `;
    
        let formHTML = `
          <style>
            ${styles}
          </style>
          <form>
            <h2>${this.getAttribute('title') || ''}</h2>`;
        data.fields.forEach(field => {
          formHTML += `<label for="${field.id}">${field.label}</label>
                       <input id="${field.id}" type="${field.type}" />`;
        });
        formHTML += '</form>';
        this.shadowRoot.innerHTML = formHTML;
    }
  }

  
  customElements.define('form-component', FormComponent);