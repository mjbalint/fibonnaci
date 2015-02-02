/*
 * Fibonacci -- Client Javascript
 *
 * @author Matthew Balint
 * @date February 2015
 */

// The socket.io module is loaded before this one by a <script> directive in index.html.
var socket = io();

$(document).ready(function(){
    console.log("slkdjfdsjfdfl;kdjfl\n");
    
    $('#go').click(function(){
        var iterations = parseInt($('#iterations').val(), 10);
        
        $('#fibonacciTable').empty();
        $('#fibonacciTable').append(
            '<tr>' +
                '<th>Number</th>' +
                '<th>Value</th>' +
            '</tr>');
        
        var prev_value = 0;
        var value = 1;
        for (var i = 1; i <= iterations; i++) {
            var remainder = i % 10;
            var iSuffix = null;
            switch (remainder) {
            case 1:
                if (11 === i % 100) {
                    iSuffix = "th";
                } else {
                    iSuffix = "st";
                }
                break;
            case 2:
                if (12 === i % 100) {
                    iSuffix = "th";
                } else {
                    iSuffix = "nd";
                }
                break;
            case 3:
                if (13 === i % 100) {
                    iSuffix = "th";
                } else {
                    iSuffix = "rd";
                }
                break;
            default:
                iSuffix = "th";
            }
            
            $('#fibonacciTable').append(
                "<tr><td>" + i + iSuffix + "</td><td>" + value + "</td></tr>");
            var next_value = prev_value + value;
            prev_value = value;
            value = next_value;
        }
    });
});