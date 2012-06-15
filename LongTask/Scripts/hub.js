$(function () {
    var taskHub = $.connection.taskHub;

    taskHub.progress = function (procId, total) {
        var $tr = $('#' + procId);
        var $percent = $tr.find('td:nth-child(2)');

        $percent.find('p').text(total + '%');
        $percent.find('div.bar').css('width', total + '%');
    };

    taskHub.procStart = function (procId, id) {
        console.log(id);
    };

    taskHub.procComplete = function (procId) {
        var $tr = $('#' + procId);
        taskHub.progress(procId, 100);
        $tr.find('td:nth-child(2)').find('div.progress').removeClass('active');
        $tr.find('td:nth-child(3)').text('Done');
        $tr.find('td:last').html('');
    };

    taskHub.cancelDone = function (procId) {
        var $tr = $('#' + procId);
        $tr.find('td:nth-child(2)').find('div.progress').removeClass('active');
        $tr.find('td:nth-child(3)').text('Canceled');
        $tr.find('td:last').html('');
    };

    $('#btnRun').bind('click', function (e) {
        e.preventDefault();

        var $option = $('#createTask').find('option:selected');
        var value = parseInt($option.val(), 10);
        if (!isNaN(value)) {
            var trId = new Date().getTime();
            //Create Tr
            var $tr = $('<tr id="' + trId + '"><td>' + $option.text() + '</td><td><p>0%</p><div class="progress progress-striped active"><div class="bar" style="width: 0%;"></div></div></td><td>Running...</td><td><button class="btn btn-danger">Stop</button></td></tr>');
            $tr.appendTo('#tblTasks>tbody');

            taskHub.doLongProc(trId, $option.text());
        }
    });

    $('#tblTasks').on('click', 'button', function (e) {
        e.preventDefault();
        taskHub.cancelProc($(this).parent().parent().attr('id'));
    });

    $.connection.hub.start();
})