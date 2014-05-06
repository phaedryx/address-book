(function() {
  var AddressAddForm, AddressBook, AddressList, App, div, form, h2, h3, input, label, span, table, tbody, td, th, thead, tr, _ref;

  _ref = React.DOM, div = _ref.div, h2 = _ref.h2, h3 = _ref.h3, span = _ref.span, table = _ref.table, thead = _ref.thead, tbody = _ref.tbody, th = _ref.th, tr = _ref.tr, td = _ref.td, form = _ref.form, label = _ref.label, input = _ref.input;

  AddressBook = (function() {
    function AddressBook(addresses) {
      this.addresses = addresses instanceof Array ? addresses : [];
    }

    AddressBook.prototype.addAddress = function(address) {
      return this.addresses.push(address);
    };

    AddressBook.prototype.removeAddress = function(address) {
      return this.addresses = this.addresses.filter(function(a) {
        return a.key !== address.key;
      });
    };

    return AddressBook;

  })();

  AddressAddForm = React.createClass({
    submit: function() {
      var email, firstName, lastName, message, phone, _ref1;
      _ref1 = this.refs, firstName = _ref1.firstName, lastName = _ref1.lastName, email = _ref1.email, phone = _ref1.phone;
      message = "submitted:\n  first name: " + firstName.state.value + "\n  last name: " + lastName.state.value + "\n  email: " + email.state.value + "\n  phone: " + phone.state.value;
      return alert(message);
    },
    render: function() {
      return form({
        onSubmit: this.submit
      }, input({
        type: 'text',
        placeholder: 'first name',
        ref: 'firstName'
      }, input({
        type: 'text',
        placeholder: 'last name',
        ref: 'lastName'
      }, input({
        type: 'text',
        placeholder: 'email address',
        ref: 'email'
      }, input({
        type: 'text',
        placeholder: 'phone number',
        ref: 'phone'
      }, input({
        type: 'submit',
        className: 'btn btn-blue',
        value: 'Add'
      }))))));
    }
  });

  AddressList = React.createClass({
    render: function() {
      var createRow;
      createRow = function(address) {
        return tr({}, td({}, "" + address.firstName), td({}, "" + address.lastName), td({}, "" + address.email), td({}, "" + address.phone), td({}, "remove link"));
      };
      return table({}, thead({}, tr({}, th({}, "First Name"), th({}, "Last Name"), th({}, "Email Address"), th({}, "Phone Number"), th({}, ""))), tbody({}, this.props.addressBook.addresses.map(createRow)));
    }
  });

  App = React.createClass({
    getInitialState: function() {
      var address;
      address = {
        key: 1,
        firstName: "Bill",
        lastName: "Jones",
        email: "",
        phone: ""
      };
      return {
        addressBook: new AddressBook([address])
      };
    },
    render: function() {
      return div({
        id: "address-book"
      }, h2({}, "Address Book"), AddressAddForm({
        addressBook: this.state.addressBook
      }), AddressList({
        addressBook: this.state.addressBook
      }));
    }
  });

  window.App = App;

}).call(this);
