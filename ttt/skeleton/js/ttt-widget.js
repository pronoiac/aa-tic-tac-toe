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
    // debugger
    // this.game.playMove([x, y]);
    this.game.playMove([x,y]);
    
    //
  };

  Widget.prototype.play = function () {
    //
    var that = this;
    console.log ("dbg, play called");
    $("div.square").on("click", function(event) {
      event.preventDefault();
      //try to place current player's mark on square
      console.log(event.currentTarget);
      // debugger;
      // that.textContent("mark");
      event.currentTarget.textContent = "mark";
      that.makeMove(event.currentTarget);
      // 
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
        // $div.addId('square' + i + j);
        $div.attr('id', i + '_' + j );
        $div.text(i + ", " + j);
        // $div.text(this.game.board.grid[i][j]);
        //$div.addClass("green"); //('text', "What.");
        console.log($div.text);
        $row.append($div);
      };
      // end inner loop
      this.el.append($row);
    };
    
    console.log("dbg: W.setupBoard");
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
