(function() {
  var AddressAddForm, AddressBook, AddressList, a, button, div, form, h2, h3, input, label, span, table, tbody, td, th, thead, tr, _ref;

  _ref = React.DOM, div = _ref.div, h2 = _ref.h2, h3 = _ref.h3, span = _ref.span, a = _ref.a, table = _ref.table, thead = _ref.thead, tbody = _ref.tbody, th = _ref.th, tr = _ref.tr, td = _ref.td, form = _ref.form, label = _ref.label, input = _ref.input, button = _ref.button;

  AddressAddForm = React.createClass({
    submit: function() {
      var email, firstName, lastName, phone, _ref1;
      _ref1 = this.refs, firstName = _ref1.firstName, lastName = _ref1.lastName, email = _ref1.email, phone = _ref1.phone;
      this.props.addAddress({
        key: Math.random(),
        firstName: firstName.state.value,
        lastName: lastName.state.value,
        email: email.state.value,
        phone: phone.state.value
      });
      firstName.getDOMNode().value = '';
      lastName.getDOMNode().value = '';
      email.getDOMNode().value = '';
      phone.getDOMNode().value = '';
      return false;
    },
    render: function() {
      return form({}, input({
        type: 'text',
        ref: 'firstName',
        placeholder: 'first name'
      }), input({
        type: 'text',
        ref: 'lastName',
        placeholder: 'last name'
      }), input({
        type: 'text',
        ref: 'email',
        placeholder: 'email address'
      }), input({
        type: 'text',
        ref: 'phone',
        placeholder: 'phone number'
      }), button({
        onClick: this.submit,
        className: 'btn btn-blue'
      }, "Add"));
    }
  });

  AddressList = React.createClass({
    render: function() {
      var createRow;
      createRow = function(address) {
        return tr({}, td({}, address.firstName), td({}, address.lastName), td({}, address.email), td({}, address.phone), td({}, button({
          onClick: alert("removed")
        }, "remove")));
      };
      return table({}, thead({}, tr({}, th({}, "First Name"), th({}, "Last Name"), th({}, "Email Address"), th({}, "Phone Number"), th({}))), tbody({}, this.props.addresses.map(createRow)));
    }
  });

  AddressBook = React.createClass({
    getInitialState: function() {
      return {
        addresses: [
          {
            key: 1,
            firstName: 'Dennis'
          }
        ]
      };
    },
    addAddress: function(address) {
      this.state.addresses.push(address);
      return this.forceUpdate();
    },
    removeAddress: function(address) {
      var new_addresses;
      new_addresses = this.state.addresses.filter(function(a) {
        return a.key !== address.key;
      });
      return this.setState({
        addresses: new_addresses
      });
    },
    render: function() {
      return div({
        id: "address-book"
      }, h2({}, "Address Book"), AddressAddForm({
        addAddress: this.addAddress
      }), AddressList({
        addresses: this.state.addresses,
        removeAddress: this.removeAddress
      }));
    }
  });

  window.AddressBook = AddressBook;

}).call(this);
