var host = 'https://testapi.io/api/songthe1';
// var result1;

$(document).ready(function () {
    //Tai du lieu tu server
    $.ajax({
        url: 'https://testapi.io/api/songthe1/user/list',
        //lay du lieu api
        type: 'GET',
        success: function (result) {
            //In ra de xem
            console.log(result);
            //Duyet du lieu tra ve
            for (var i = 0; i < result.length; i++) {
                //Xay dung chuoi cau truc dong cua table (tr -> td)
                var tr = '<tr>';
                var td = '<td>' + result[i].id + '</td>';
                td += "<td>" + result[i].username + "</td>"
                td += '<td>' + result[i].vitri + '</td>'
                td += "<td>" + result[i].Female + "</td>"
                td += '<td>' + ' <button onclick = "chitiet(\'' + result[i].username + '\')" class="btn-primary">Chi tiet</button>' + '</td>'
                tr += td + '</tr>';
                //Them noi dung dung moi vao bang
                $('tbody').append(tr);

                //Cau truc mong muon
                // <tr>
                //  <td></td>
                //   <td></td>
                //   <td></td>
                //   <td></td>
                // </tr>

            }
            //An vong xoay
            $('#spinner').hide();
            $('p').text(' ');
        }
    });

});

function chitiet(username) {
    console.log(username);

};














