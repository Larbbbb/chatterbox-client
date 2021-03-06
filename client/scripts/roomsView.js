var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    $('#rooms button').off().click(Rooms.add);
  },

  renderRoom: function(room) {
    var compiled = _.template(`
    <option value="<%= room %>"><%= room %></option>
  `);
    $('#rooms select').append(compiled({'room': room}));
  }

};
