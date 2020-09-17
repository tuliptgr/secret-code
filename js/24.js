var ar = [],
    order = [0, 1, 2],
    op = [],
    val = [];
var NOVAL = 9999,
    oper = "+-*/",
    out;

function rnd(n) { return Math.floor(Math.random() * n) }

function say(s) {
    document.getElementById("solvenum24").innerHTML += s + "<br>";
}

function getvalue(x, dir) {
    var r = NOVAL;
    if (dir > 0) ++x;
    while (1) {
        if (val[x] != NOVAL) {
            r = val[x];
            val[x] = NOVAL;
            break;
        }
        x += dir;
    }
    return r * 1;
}

function calc() {
    var c = 0,
        l, r, x;
    val = ar.join('/').split('/');
    while (c < 3) {
        x = order[c];
        l = getvalue(x, -1);
        r = getvalue(x, 1);
        switch (op[x]) {
            case 0:
                val[x] = l + r;
                break;
            case 1:
                val[x] = l - r;
                break;
            case 2:
                val[x] = l * r;
                break;
            case 3:
                if (!r || l % r) return 0;
                val[x] = l / r;
        }
        ++c;
    }
    return getvalue(-1, 1);
}

function shuffle(s, n) {
    var x = n,
        p = eval(s),
        r, t;
    while (x--) {
        r = rnd(n);
        t = p[x];
        p[x] = p[r];
        p[r] = t;
    }
}

function parenth(n) {
    while (n > 0) --n, out += '(';
    while (n < 0) ++n, out += ')';
}

function getpriority(x) {
    for (var z = 3; z--;)
        if (order[z] == x) return 3 - z;
    return 0;
}

function showsolution() {
    var x = 0,
        p = 0,
        lp = 0,
        v = 0;
    while (x < 4) {
        if (x < 3) {
            lp = p;
            p = getpriority(x);
            v = p - lp;
            if (v > 0) parenth(v);
        }
        out += ar[x];
        if (x < 3) {
            if (v < 0) parenth(v);
            out += oper.charAt(op[x]);
        }
        ++x;
    }
    parenth(-p);
    say(out);
}

function solve24() {
    var z = 4,
        r, s = "",
        a = document.getElementById("num24_1").value,
        b = document.getElementById("num24_2").value,
        c = document.getElementById("num24_3").value,
        d = document.getElementById("num24_4").value;
    s = a + b + c + d;
    while (z--) ar[z] = s.charCodeAt(z) - 48;
    out = "";
    for (z = 100000; z--;) {
        r = rnd(256);
        op[0] = r & 3;
        op[1] = (r >> 2) & 3;
        op[2] = (r >> 4) & 3;
        shuffle("ar", 4);
        shuffle("order", 3);
        if (calc() != 24) continue;
        showsolution();
        break;
    }
}

function perfect24() {
    var a, b, c, d, p, q;
    a = document.getElementById("num24_1").value;
    b = document.getElementById("num24_2").value;
    c = document.getElementById("num24_3").value;
    d = document.getElementById("num24_4").value;
    p = ((a == b) && (b == c)) || ((a == b) && (b == d)) || ((a == c) && (c == d)) || ((b == c) && (c == d));
    q = (((a == 0) && (b == 0)) || ((a == 0) && (c == 0)) || ((a == 0) && (d == 0)) || ((b == 0) && (c == 0)) || ((b == 0) && (d == 0)) || ((c == 0) && (d == 0)));
    if (p || q) {
        return true;
    }
    return false;
}

function randomNumbers() {
    while (document.getElementById("solvenum24").innerHTML == "" || perfect24()) {
        document.getElementById("num24_1").value = rnd(10);
        document.getElementById("num24_2").value = rnd(10);
        document.getElementById("num24_3").value = rnd(10);
        document.getElementById("num24_4").value = rnd(10);
        solve24();
    }
    document.getElementById("solvenum24").innerHTML = "";
}



function randomNumbers180() {
    var a, b, c, d, e, p;
    a = rnd(10);
    b = rnd(10);
    c = rnd(10);
    d = rnd(10);
    e = rnd(10);
    if ((a == 0 && b == 0) || (a == 0 && c == 0) || (a == 0 && d == 0) || (a == 0 && e == 0) || (b == 0 && c == 0) || (b == 0 && d == 0) || (b == 0 && e == 0) || (c == 0 && d == 0) || (c == 0 && e == 0) || (d == 0 && e == 0)) {
        a = rnd(10);
        b = rnd(10);
        c = rnd(10);
        d = rnd(10);
        e = rnd(10);
    }
    document.getElementById("num180_1").value = a;
    document.getElementById("num180_2").value = b;
    document.getElementById("num180_3").value = c;
    document.getElementById("num180_4").value = d;
    document.getElementById("num180_5").value = e;
}

function randomNumbers1802() {
    randomNumbers180();
    document.getElementById("num180_solve").value = rnd(100);
    while (Number(document.getElementById("num180_solve").value) < 10) {
        document.getElementById("num180_solve").value = rnd(100);
    }
}

function randomNumbers1803() {
    randomNumbers180();
    document.getElementById("num180_solve").value = rnd(1000);
    while (Number(document.getElementById("num180_solve").value) < 100) {
        document.getElementById("num180_solve").value = rnd(1000);
    }
}