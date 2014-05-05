{
  div, h2, h3, span,
  table, thead, tbody, th, tr, td,
  form, label, input
} = React.DOM

AddressAddForm = React.createClass(
  submit: ->
    alert("submitted")

  render: ->
    form {onSubmit: @submit},
      input {type: 'text', placeholder: 'first name'},
      input {type: 'text', placeholder: 'last name'},
      input {type: 'text', placeholder: 'email address'},
      input {type: 'text', placeholder: 'phone number'},
      input {type: 'submit', className: 'btn btn-blue', value: 'Add'}
)

AddressList = React.createClass(
  render: ->
    table {},
      thead {},
        tr {},
          th {},
            "First Name",
          th {},
            "Last Name",
          th {},
            "Email Address"
          th {},
            "Phone Number"
)

AddressBook = React.createClass(
  render: ->
    div {id: "address-book"},
      h2 {},
        "Address Book",
      AddressAddForm(),
      AddressList()
)

window.AddressBook = AddressBook
