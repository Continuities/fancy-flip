(function () {

    function populateDefaultOptions(options) {
        options = options || {};
        var defaults = {
            width: '400px',
            height: '300px'
        };
        for (var opt in defaults) {
            if (!options[opt]) {
                options[opt] = defaults[opt];
            }
        }
        return options;
    }

    function create(id, options) {
        options = populateDefaultOptions(options);
        var el = document.getElementById(id);
        if (!el || el.tagName != 'UL') {
            console.error('FancyFlip requires a reference to a UL');
            return;
        }
        var container = el.parentNode || document.body;
        var wrapper = document.createElement('div');
        wrapper.className = 'ff_wrapper';
        wrapper.appendChild(el);
        el.className = el.className + " fancyFlip";
        wrapper.style.width = options.width;
        wrapper.style.height = options.height;
        var left = document.createElement('div');
        left.className = 'page_turn left';
        left.onclick = pageBackward;
        wrapper.appendChild(left);
        var right = document.createElement('div');
        right.className = 'page_turn right';
        right.onclick = pageForward;
        wrapper.appendChild(right);
        var children = el.children;
        if (children.length % 2 === 0) {
            el.appendChild(document.createElement('li'));
        }
        for (var i = 0, len = children.length; i < len; i++) {
            var li = children[i];
            if (li.tagName == 'LI') {
                li.className = '';
                li.innerHTML = '<div>' + li.innerHTML + '</div>';
            }
        }
        container.appendChild(wrapper);
    }

    function findList(el) {
        return el.parentNode.children[0];
    }

    function findLastTurnedPage(pages) {
        for (var i = pages.length - 1; i >= 0; i--) {
            var page = pages[i];
            if (page.className == 'turned') {
                return i;
            }
        }
        return -1;
    }

    function turnPage(list, dir) {
        var pages = list.getElementsByTagName('li');
        var pageToTurn = findLastTurnedPage(pages);
        if (dir == 'forward' && pageToTurn < pages.length - 2) {
            pages[pageToTurn + 2].className = 'turned';
        } else if (dir == 'backward' && pageToTurn > 0) {
            pages[pageToTurn].className = '';
        }
    }

    function pageForward() {
        var list = findList(this);
        turnPage(list, 'forward');
    }

    function pageBackward() {
        var list = findList(this);
        turnPage(list, 'backward');
    }

    window.FancyFlip = {
        create: create
    };
})();
