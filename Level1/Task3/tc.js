function convert()
{
    var a = document.getElementById("sel").value;
    var b = document.getElementById("deg").value;
    if(b.length == 0 || b.length=="")
    {
        document.getElementById("p1").innerHTML = "Please enter the temperature";
        return false;
    }
    if(isNaN(b))
    {
        document.getElementById("p1").innerHTML = "Enter numeric value only";
        return false;
    }
    else
    {
        document.getElementById("p1").innerHTML = "";
    }
    if(a == 'Celsius')
    {
        var fahr = ((9/5) * b) + 32;
        document.getElementById("res").value = fahr + "\xB0 Farenhite";
    }

    if(a == 'Farenhite')
    {
        var cel = (b - 32) * (5/9);
        document.getElementById("res").value = cel + "\xB0 Celsius";
    }
    
    if(a == 'Kelvin')
    {
        var kel = parseFloat(b) + 273.15;
        document.getElementById("res").value = kel + "K Kelvin";
    }
}