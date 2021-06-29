todo = $(".txtb");

$(".txtb").on("keyup", function (e) {

    // 13 means enter button
    if (e.keyCode == 13 && todo.val() != "") {
        var task = $('<div class="task"></div>').text($(".txtb").val());
        var del = $('<i class="fas fa-trash-alt"></i>').click(function () {
            var p = $(this).parent();
            p.fadeOut(function () {
                p.remove();
            });
        });

        var check = $('<i class="fas fa-check"></i>').on('click', function () {
            var p = $(this).parent();
            p.fadeOut(function () {
                $(".comp").append(p);
                task.append(redo);
                p.fadeIn();
            });
<<<<<<< HEAD
            task.append(redo);
            $(this).hide();            
            redo.show().insertAfter('.comp'.children('.task i:nth-child(2)'));

            
=======
            $(this).hide();
            redo.show();
>>>>>>> parent of 7ad5c85 (Redo button fix)
        });

        var redo = $('<i class="fas fa-redo"></i>').click(function () {
            var p = $(this).parent();
            p.fadeOut(function () {
                $(".notcomp").append(p);
                p.fadeIn();
                check.show(); 
            });
            $(this).hide();
        });
        
        var editIcon = $('<i class="fas fa-edit"></i>')
        var edit = editIcon.click(function () {
            var p = $(this).parent();
                p.attr({ class: "task-edit", contenteditable: true }).focus();
                p.blur(function () {
                    $(this).attr({ class: "task", contenteditable: false })
                    .css({ color: "", background: "" });
                });
        });

        task.append(del, edit, check);
        $(".notcomp").append(task);
        //to clear the input value
        $(".txtb").val("");
    };
});