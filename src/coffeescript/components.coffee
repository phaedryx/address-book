{
  div, h2, h3, span, a,
  table, thead, tbody, th, tr, td,
  form, label, input, button
} = React.DOM

AddressAddForm = React.createClass(
  submit: ->
    {firstName, lastName, email, phone} = @refs
    @props.addressBook.addAddress(
      key: Math.random()
      firstName: firstName.state.value
      lastName: lastName.state.value
      email: email.state.value
      phone: phone.state.value
    )
    firstName.getDOMNode().value = ''
    lastName.getDOMNode().value = ''
    email.getDOMNode().value = ''
    phone.getDOMNode().value = ''
    false

  render: ->
    form {},
      input(type: 'text', ref: 'firstName', placeholder: 'first name'),
      input(type: 'text', ref: 'lastName',  placeholder: 'last name'),
      input(type: 'text', ref: 'email',     placeholder: 'email address'),
      input(type: 'text', ref: 'phone',     placeholder: 'phone number'),
      button({onClick: @submit, className: 'btn btn-blue'}, "Add")
)

AddressList = React.createClass(
  render: ->
    createRow = (address) =>
      tr {},
        td({}, address.firstName),
        td({}, address.lastName),
        td({}, address.email),
        td({}, address.phone),
        td {},
          button({onClick: => @props.addressBook.removeAddress(address)}, "remove")

    table {},
      thead {},
        tr {},
          th({}, "First Name"),
          th({}, "Last Name"),
          th({}, "Email Address"),
          th({}, "Phone Number"),
          th({})
      tbody {},
        @props.addressBook.addresses.map(createRow)
)

App = React.createClass(
  getInitialState: ->
    app = this
    addressBook = {
      addresses: [{key: 1, firstName: "Tad", lastName: "Thorley", email: "tad@example.com", phone: "555-5555"}]
      addAddress: (address) ->
        @addresses.push(address)
        app.setState({addressBook: this})
      removeAddress: (address) ->
        @addresses = @addresses.filter((a) -> a.key != address.key)
        app.setState({addressBook: this})
    }

    {addressBook: addressBook}

  render: ->
    div {id: "address-book"},
      h2({}, "Address Book"),
      AddressAddForm({addressBook: @state.addressBook}),
      AddressList({addressBook: @state.addressBook})
)

window.App = App
