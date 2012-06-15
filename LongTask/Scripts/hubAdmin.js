$(function () {
    var adminHub = $.connection.adminHub;

    adminHub.createAdminProc = function (procId, taskName, userName) {
        var $tr = $('<tr id="' + procId + '"><td>' + userName + ' - ' + taskName + '</td><td><p>0%</p><div class="progress progress-striped active"><div class="bar" style="width: 0%;"></div></div></td><td>Running...</td><td></td></tr>');
        $tr.appendTo('#tblTasksAdmin>tbody');
    };

    adminHub.progress = function (procId, total) {
        var $tr = $('#' + procId);
        var $percent = $tr.find('td:nth-child(2)');

        $percent.find('p').text(total + '%');
        $percent.find('div.bar').css('width', total + '%');
    };

    adminHub.procStart = function (procId, id) {
        console.log(id);
    };

    adminHub.procComplete = function (procId) {
        var $tr = $('#' + procId);
        adminHub.progress(procId, 100);
        $tr.find('td:nth-child(2)').find('div.progress').removeClass('active');
        $tr.find('td:nth-child(3)').text('Done');
        $tr.find('td:last').html('');
    };

    adminHub.cancelDone = function (procId) {
        var $tr = $('#' + procId);
        $tr.find('td:nth-child(2)').find('div.progress').removeClass('active');
        $tr.find('td:nth-child(3)').text('Canceled');
        $tr.find('td:last').html('');
    };

    $.connection.hub.start();
})