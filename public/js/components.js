(function() {
  var AddressAddForm, AddressBook, AddressList, div, form, h2, h3, input, label, span, table, tbody, td, th, thead, tr, _ref;

  _ref = React.DOM, div = _ref.div, h2 = _ref.h2, h3 = _ref.h3, span = _ref.span, table = _ref.table, thead = _ref.thead, tbody = _ref.tbody, th = _ref.th, tr = _ref.tr, td = _ref.td, form = _ref.form, label = _ref.label, input = _ref.input;

  AddressAddForm = React.createClass({
    submit: function() {
      return alert("submitted");
    },
    render: function() {
      return form({
        onSubmit: this.submit
      }, input({
        type: 'text',
        placeholder: 'first name'
      }, input({
        type: 'text',
        placeholder: 'last name'
      }, input({
        type: 'text',
        placeholder: 'email address'
      }, input({
        type: 'text',
        placeholder: 'phone number'
      }, input({
        type: 'submit',
        className: 'btn btn-blue',
        value: 'Add'
      }))))));
    }
  });

  AddressList = React.createClass({
    render: function() {
      return table({}, thead({}, tr({}, th({}, "First Name"), th({}, "Last Name"), th({}, "Email Address"), th({}, "Phone Number"))));
    }
  });

  AddressBook = React.createClass({
    render: function() {
      return div({}, h2({}, "Address Book"), AddressAddForm(), AddressList());
    }
  });

  window.AddressBook = AddressBook;

}).call(this);
