var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


var icicle;

function icicleInit(jsonResponse){
  //left panel controls
  controls();

  // init data
    var json = jsonResponse;
  // end
  // init Icicle
  icicle = new $jit.Icicle({
    // id of the visualization container
    injectInto: 'infovis',
    // whether to add transition animations
    animate: animate,
    // nodes offset
    offset: 1,
    // whether to add cushion type nodes
    cushion: false,
    //show only three levels at a time
    constrained: true,
    levelsToShow: 3,
    // enable tips
    Tips: {
      enable: true,
      type: 'Native',
      // add positioning offsets
      offsetX: 20,
      offsetY: 20,
      // implement the onShow method to
      // add content to the tooltip when a node
      // is hovered
      onShow: function(tip, node){
        // count children
        var count = 0;
        node.eachSubnode(function(){
          count++;
        });
        // add tooltip info
        tip.innerHTML = "<div class=\"tip-title\"><b>Name:</b> " + node.name
            + "</div><div class=\"tip-text\">" + count + " children</div>"
            + "</div><div class=\"tip-text\">" + node.data.empcnt + " assigned</div>";
      }
    },
    // Add events to nodes
    Events: {
      enable: true,
      onMouseEnter: function(node) {
        //add border and replot node
        node.setData('border', '#33dddd');
        icicle.fx.plotNode(node, icicle.canvas);
        icicle.labels.plotLabel(icicle.canvas, node, icicle.controller);
      },
      onMouseLeave: function(node) {
        node.removeData('border');
        icicle.fx.plot();
      },
      onClick: function(node){
        if (node) {
          //hide tips and selections
          icicle.tips.hide();
          var html = "<div class=\"tip-title\">" + node.name + "</div>"; 
          var data = node.data;
            if(icicle.events.hovered)
            this.onMouseLeave(icicle.events.hovered);
          //perform the enter animation
          icicle.enter(node);
         for(key in data) {
              html += "<br /><br /><b>" + key + ":</b>" + data[key] + "</br>";
            }
         $jit.id('inner-details').innerHTML = html;
         
        }
      },
      onRightClick: function(){
        //hide tips and selections
        icicle.tips.hide();
        if(icicle.events.hovered)
          this.onMouseLeave(icicle.events.hovered);
        //perform the out animation
        icicle.out();
      }
    },
    // Add canvas label styling
    Label: {
      type: labelType // "Native" or "HTML"
    },
    // Add the name of the node in the corresponding label
    // This method is called once, on label creation and only for DOM and not
    // Native labels.
    onCreateLabel: function(domElement, node){
      domElement.innerHTML = node.name;
      var style = domElement.style;
      style.fontSize = '0.9em';
      style.display = '';
      style.cursor = 'pointer';
      style.color = '#000';
      style.overflow = 'hidden';
    },
    // Change some label dom properties.
    // This method is called each time a label is plotted.
    onPlaceLabel: function(domElement, node){
      var style = domElement.style,
          width = node.getData('width'),
          height = node.getData('height');
      if(width < 7 || height < 7) {
        style.display = 'none';
      } else {
        style.display = '';
        style.width = width + 'px';
        style.height = height + 'px';
      }
    }
  });
  // load data
  icicle.loadJSON(json);
  // compute positions and plot
  icicle.refresh();
  //end
}

//init controls
function controls() {
  var jit = $jit;
  var gotoparent = jit.id('update');
  jit.util.addEvent(gotoparent, 'click', function() {
    icicle.out();
  });
  var select = jit.id('s-orientation');
  jit.util.addEvent(select, 'change', function () {
    icicle.layout.orientation = select[select.selectedIndex].value;
    icicle.refresh();
  });
  var levelsToShowSelect = jit.id('i-levels-to-show');
  jit.util.addEvent(levelsToShowSelect, 'change', function () {
    var index = levelsToShowSelect.selectedIndex;
    if(index == 0) {
      icicle.config.constrained = false;
    } else {
      icicle.config.constrained = true;
      icicle.config.levelsToShow = index;
    }
    icicle.refresh();
  });
}
//end
