// ==UserScript==
// @name         UCAS SEP Helper
// @namespace    https://github.com/ngc7331/UCAS-SEP-Helper
// @version      0.6.0
// @description  useful tool for UCAS SEP
// @author       xu_zh
// @match        https://course.ucas.ac.cn/*
// @match        https://bkkcpj.ucas.ac.cn/*
// @icon         data:image/png;base64,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
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/ngc7331/UCAS-SEP-Helper/main/helper.js
// @updateURL    https://raw.githubusercontent.com/ngc7331/UCAS-SEP-Helper/main/helper.js
// @supportURL   https://github.com/ngc7331/UCAS-SEP-Helper/issues
// ==/UserScript==

(function() {
    'use strict';

    /* --- utils --- */
    class Scheduler {
        constructor() {
            this._lim = 5;
            this.queue = [];
            this.working = [];
            this._display = null;
        }
        addTask(task) {
            return new Promise((resolve) => {
                task.resolve = resolve;
                if (this.working.length < this._lim) {
                    this.runTask(task);
                } else {
                    this.queue.push(task);
                }
                this.updateDisplay();
            });
        }
        runTask(task) {
            this.working.push(task);
            task().then(() => {
                task.resolve();
                var idx = this.working.indexOf(task);
                this.working.splice(idx, 1);
                if (this.queue.length > 0) {
                    this.runTask(this.queue.shift());
                }
                this.updateDisplay();
            });
        }
        setDisplay(elem) {
            this._display = elem;
        }
        updateDisplay() {
            if (this._display === null) {
                return ;
            }
            this._display.innerHTML = `运行/排队: ${this.working.length}/${this.queue.length}`;
        }
    }

    function register(func, hostname) {
        if (window.location.hostname !== hostname) {
            return ;
        }
        func();
    }

    /* --- module --- */
    function resourceBulkDownload() {
        function worker(mode){
            // mode = 0: download all
            // mode = 1: download selected
            function download(url, filename) {
                return new Promise(function (resolve, reject) {
                    var xhr = new XMLHttpRequest();
                    xhr.open("get", url, true);
                    xhr.responseType = "blob";
                    xhr.onload = function() {
                        if (xhr.status === 200) {
                            var content = xhr.response;
                            var a = document.createElement("a");
                            var blob = new Blob([content]);
                            var url = window.URL.createObjectURL(blob);
                            a.href = url;
                            a.download = filename;
                            a.click();
                            window.URL.revokeObjectURL(url);
                            console.log(`Downloaded ${filename}`);
                            resolve();
                        } else {
                            reject(new Error(xhr.statusText));
                        }
                    };
                    xhr.onerror = function() {
                        reject(new Error(xhr.statusText));
                    };
                    console.log(`Downloading ${filename} from ${url}`);
                    xhr.send();
                });
            }

            function getA(tr) {
                return tr.querySelector("td:nth-child(3) > a:nth-child(2)");
            }

            function getCheckBox(tr) {
                return tr.querySelector("td:nth-child(2) > input");
            }

            var sched = new Scheduler();
            sched.setDisplay(display);
            const addTask = (href, name, i, tot) => {
                sched.addTask(() => download(href, name))
                     .then(() => console.log(`Done ${i+1}/${tot}`));
            }

            var trs = document.querySelectorAll("#showForm > table > tbody > tr");

            // filter out folders
            trs = Array.prototype.filter.call(trs, function(elem) {
                var a = getA(elem);
                return a !== null && a.href !== undefined && !a.href.endsWith("#");
            });

            // filter out unchecked
            if (mode == 1) {
                trs = Array.prototype.filter.call(trs, function(elem) {
                    var box = getCheckBox(elem);
                    return box.checked;
                });
            }

            console.log(trs);

            // download
            for (var i = 0; i < trs.length; i++) {
                var a = getA(trs[i]);
                var href = a.href;
                var name = a.children[1].innerHTML;
                console.log(`Add task (${i+1}/${trs.length})`);
                addTask(href, name, i, trs.length);
            }
        }

        function downloadAllBtnListener(event) {
            event.preventDefault();
            worker(0);
        }

        function downloadSelBtnListener(event) {
            event.preventDefault();
            worker(1);
        }

        var curr_page = document.querySelector("#toolMenu > ul > li.is-current > a");
        var cpy_btn = document.getElementById("copy-button");
        if (cpy_btn === null || curr_page.title !== "资源") {
            return ;
        }

        // create buttons
        var dl_sel_btn = document.createElement("button");
        dl_sel_btn.style = "margin:0";
        dl_sel_btn.className = "btn";
        dl_sel_btn.innerHTML = "下载已选";
        dl_sel_btn.addEventListener("click", downloadSelBtnListener);
        var dl_all_btn = document.createElement("button");
        dl_all_btn.style = "margin:0";
        dl_all_btn.className = "btn";
        dl_all_btn.innerHTML = "下载全部";
        dl_all_btn.addEventListener("click", downloadAllBtnListener);
        var display = document.createElement("span");
        display.style = "padding: 5px 10px; display:block; float:left;";

        // insert buttons on page
        cpy_btn.parentNode.appendChild(dl_sel_btn);
        cpy_btn.parentNode.appendChild(dl_all_btn);
        cpy_btn.parentNode.appendChild(display);
    }

    function keepMeAlive() {
        function worker() {
            var alert = document.querySelector("#timeout_alert_body");
            if (alert === null) {
                return ;
            }

            console.log("Keep alive...");

            var btn = alert.querySelector("input[type=button]");
            btn.click();
        }

        function enableBtnListener(event) {
            if (enable_btn.checked) {
                console.log("Keep alive enabled");
                worker_id = window.setInterval(worker, interval);
            } else {
                console.log("Keep alive disabled");
                window.clearInterval(worker_id);
            }
        }

        // create setting
        var enable_btn = document.createElement("input");
        enable_btn.type = "checkbox";
        enable_btn.checked = true;
        enable_btn.style = "margin: 0 5px;";
        enable_btn.addEventListener("change", enableBtnListener);
        var enable_hint = document.createElement("a");
        enable_hint.innerHTML = "保持在线";
        enable_hint.href = "#";
        enable_hint.appendChild(enable_btn);
        var enable_li = document.createElement("li");
        enable_li.className = "Mrphs-userNav__submenuitem Mrphs-userNav__submenuitem-indented";
        enable_li.appendChild(enable_hint);

        // insert setting on page
        var menu = document.querySelector("#loginLinks > li.Mrphs-userNav__popup.js-toggle-user-nav > ul");
        if (menu === null) {
            return ;
        }
        menu.appendChild(enable_li);

        // check every 5 min
        const interval = 5 * 60 * 1000;
        var worker_id = window.setInterval(worker, interval);
    }

    function coursePoll() {
        function worker(do_submit) {
            function fill(card) {
                var input = card.querySelector("div > div:nth-child(3) > div > table > tr > td:nth-child(1) > div > div > div.el-checkbox-group > div:nth-child(1) > label");
                if (input !== null) {
                    // 多选题
                    input.click();
                    return ;
                }
                input = card.querySelector("div > div:nth-child(3) > div > table > tr > td > div > div > div.el-radio-group > div:nth-child(1) > label");
                if (input !== null) {
                    // 单选题
                    input.click();
                    return ;
                }
                input = card.querySelector("div > div:nth-child(3) > div > div > div > div > label:nth-child(1)");
                if (input !== null) {
                    // 数字单选题
                    input.click();
                    return ;
                }
                input = card.querySelector("div > div:nth-child(3) > div > div > div > textarea");
                if (input !== null) {
                    // 问答题
                    input.value = "好好好好好好好好好好好好好好好好好好好好";
                    return ;
                }
                console.log(card);
                alert("填充失败：未知题型");
            }

            for (var i = 1; i < cards.length - 1; i++) {
                fill(cards[i]);
            }

            if (do_submit) {
                submit.click();
            }
        }

        function pollBtnListener(event) {
            event.preventDefault();
            worker(0);
        }

        function pollAndSubmitBtnListener(event) {
            event.preventDefault();
            worker(1);
        }

        var cards;
        var submit;

        window.setTimeout(() => {
            cards = document.querySelectorAll("#app > div > form > div");
            if (cards.length < 3) {
                return ;
            }

            var headers = cards[0]
            submit = cards[cards.length - 1].querySelector("div > button");

            var poll_btn = document.createElement("button");
            poll_btn.innerHTML = "填充";
            poll_btn.addEventListener("click", pollBtnListener);

            var poll_submit_btn = document.createElement("button");
            poll_submit_btn.innerHTML = "填充并提交";
            poll_submit_btn.addEventListener("click", pollAndSubmitBtnListener);

            var span = document.createElement("span");
            span.style = "margin-left: 20px;";
            span.appendChild(poll_btn);
            span.appendChild(poll_submit_btn);

            headers.querySelector("div > div > div:nth-child(2)").appendChild(span);
        }, 1000);
    }

    /* --- register --- */
    register(resourceBulkDownload, "course.ucas.ac.cn");
    register(keepMeAlive, "course.ucas.ac.cn");
    register(coursePoll, "bkkcpj.ucas.ac.cn");
})();
