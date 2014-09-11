(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var Widget = TTT.Widget = function ($el) {
    
    this.game = new TTT.Game();
    this.el = $el;
    
  };

  Widget.prototype.bindEvents = function () {
  };

  Widget.prototype.makeMove = function makeMove ($square) {
    console.log ("dbg: MM");
    console.log($square);
    var x = parseInt($square.id[0]);
    //to account for the underscore, use index of 2
    var y = parseInt($square.id[2]);
    return (this.game.playMove([x,y]));
  };

  Widget.prototype.play = function () {
    //
    var that = this;

    $("div.square").on("click", function(event) {
      event.preventDefault();
      //try to place current player's mark on square

      var x = parseInt(event.currentTarget.id[0]);
      var y = parseInt(event.currentTarget.id[2]);
      
      that.makeMove(event.currentTarget);
      mark = that.game.board.grid[x][y];
      event.currentTarget.textContent = mark;

      if (mark === "x") {
        event.currentTarget.classList.add("mark_x");
      } else {
        event.currentTarget.classList.add("mark_y");
      }
      // debugger;
      if (that.game.isOver()) {
        debugger;
        // turn off the listener
        $("div.square").off;
        // inform the winning player
        var $div = $('<div></div>');
        $div.text(mark + " wins");
        $div.css("font-size", 36);
        $("section").append($div);
      }
    });
  };

  Widget.prototype.setupBoard = function () {
    //jquery stuff to create the divs we need
    
    for (var i = 0; i < 3; i++) {
      var $row = $('<div></div>')
      for (var j = 0; j < 3; j++) {
        // cell
        var $div = $('<div></div>');
        $div.addClass('square');
        $div.attr('id', i + '_' + j );
        $div.text(i + ", " + j);
        $row.append($div);
      };
      // end inner loop
      this.el.append($row);
    };
  };
  
  Widget.prototype.square = function (square_no) {
    return "x";
    
    x = Math.floor(square_no / 3);
    y = Math.floor(square_no % 3);
    console.log(square_no + ": " + x + " . " + y);
    debugger;
    console.log(this.game.board.grid[x][y]);
    return (this.game.board.grid[x][y]);
    
  }
})();
