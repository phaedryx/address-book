(function() {
  var AddressAddForm, AddressList, App, a, button, div, form, h2, h3, input, label, span, table, tbody, td, th, thead, tr, _ref;

  _ref = React.DOM, div = _ref.div, h2 = _ref.h2, h3 = _ref.h3, span = _ref.span, a = _ref.a, table = _ref.table, thead = _ref.thead, tbody = _ref.tbody, th = _ref.th, tr = _ref.tr, td = _ref.td, form = _ref.form, label = _ref.label, input = _ref.input, button = _ref.button;

  AddressAddForm = React.createClass({
    submit: function() {
      var email, firstName, lastName, phone, _ref1;
      _ref1 = this.refs, firstName = _ref1.firstName, lastName = _ref1.lastName, email = _ref1.email, phone = _ref1.phone;
      this.props.addressBook.addAddress({
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
      createRow = (function(_this) {
        return function(address) {
          return tr({}, td({}, address.firstName), td({}, address.lastName), td({}, address.email), td({}, address.phone), td({}, button({
            onClick: function() {
              return _this.props.addressBook.removeAddress(address);
            }
          }, "remove")));
        };
      })(this);
      return table({}, thead({}, tr({}, th({}, "First Name"), th({}, "Last Name"), th({}, "Email Address"), th({}, "Phone Number"), th({}))), tbody({}, this.props.addressBook.addresses.map(createRow)));
    }
  });

  App = React.createClass({
    getInitialState: function() {
      var addressBook, app;
      app = this;
      addressBook = {
        addresses: [
          {
            key: 1,
            firstName: "Tad",
            lastName: "Thorley",
            email: "tad@example.com",
            phone: "555-5555"
          }
        ],
        addAddress: function(address) {
          this.addresses.push(address);
          return app.setState({
            addressBook: this
          });
        },
        removeAddress: function(address) {
          this.addresses = this.addresses.filter(function(a) {
            return a.key !== address.key;
          });
          return app.setState({
            addressBook: this
          });
        }
      };
      return {
        addressBook: addressBook
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
