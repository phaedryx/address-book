{
  div, h2, h3, span,
  table, thead, tbody, th, tr, td,
  form, label, input
} = React.DOM

class AddressBook
  constructor: (addresses) ->
    @addresses = if (addresses instanceof Array) then addresses else []

  addAddress: (address) ->
    @addresses.push(address)

  removeAddress: (address) ->
    @addresses = @addresses.filter((a) -> a.key != address.key)


AddressAddForm = React.createClass(
  submit: ->
    {firstName, lastName, email, phone} = @refs
    message = """
      submitted:
        first name: #{firstName.state.value}
        last name: #{lastName.state.value}
        email: #{email.state.value}
        phone: #{phone.state.value}
    """
    alert(message)

  render: ->
    form {onSubmit: @submit},
      input {type: 'text', placeholder: 'first name',    ref: 'firstName'},
      input {type: 'text', placeholder: 'last name',     ref: 'lastName'},
      input {type: 'text', placeholder: 'email address', ref: 'email'},
      input {type: 'text', placeholder: 'phone number',  ref: 'phone'},
      input {type: 'submit', className: 'btn btn-blue', value: 'Add'}
)

AddressList = React.createClass(
  render: ->
    createRow = (address) ->
      tr {},
        td {},
          "#{address.firstName}"
        td {},
          "#{address.lastName}"
        td {},
          "#{address.email}"
        td {},
          "#{address.phone}"
        td {},
          "remove link"

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
            "Phone Number",
          th {},
            ""
      tbody {},
        @props.addressBook.addresses.map(createRow)
)

App = React.createClass(
  getInitialState: ->
    address = {key: 1, firstName: "Bill", lastName: "Jones", email: "", phone: ""}
    {addressBook: new AddressBook([address])}

  render: ->
    div {id: "address-book"},
      h2 {},
        "Address Book",
      AddressAddForm({addressBook: @state.addressBook}),
      AddressList({addressBook: @state.addressBook})
)

window.App = App
