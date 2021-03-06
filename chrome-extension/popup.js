/*
* pdm-chrome-wrapper (forked from uget-chrome-wrapper ) is an extension to integrate PDM Download manager
* with Google Chrome, Chromium and Vivaldi in Linux and Windows.
*
* Copyright (C) 2016  Gobinath
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

function addBookmark() {
    var keywords = document.getElementById("keywords").value;
    var interrupt = document.getElementById('chk-interrupt').checked;

    localStorage["pdm-keywords"] = keywords;

    chrome.runtime.getBackgroundPage(function(backgroundPage) {
        backgroundPage.updateKeywords(keywords);
        backgroundPage.setInterruptDownload(interrupt, true);
    });

    window.close();
}

// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
	var interrupt = (localStorage["pdm-interrupt"] == "true");
    document.getElementById('save').addEventListener('click', addBookmark);
    document.getElementById('keywords').value = localStorage["pdm-keywords"];
    document.getElementById('chk-interrupt').checked = interrupt;
});
