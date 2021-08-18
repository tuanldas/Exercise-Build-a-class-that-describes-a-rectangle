var Rectangle = function (width, height) {

    //thay doi chieu dai cua hinh chu nhat
    this.setWidth = function (width_new) {
        width = width_new;
    };

    this.getArea = function () {
        return width * height;
    };
    this.getAreaa = function () {
        var result = "#";
    for (var i = 1; i <= height; i++) {
        for (j = 1; j <= width; j++) {
            console.log("#","#","#","#","#","#","#")
        }
        console.log("        ")
    }

    };
    this.display = function () {
        console.log("width = " + width + "; height =  " + height);
        console.log("Area: " + this.getArea());
        console.log(this.getAreaa());
    }

};

function main() {
    var rec1 = new Rectangle(7, 3);
    console.log("Rectangle 1: " );
    rec1.display();
}


main();

