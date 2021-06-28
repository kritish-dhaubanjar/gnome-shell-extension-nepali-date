/* extension.js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

/* exported init */

const St = imports.gi.St;
const Main = imports.ui.main;
const Clutter = imports.gi.Clutter;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const NepaliDateLib = Me.imports.lib.date;

class Extension {
  constructor() {}

  enable() {
    this.pannelButton = new St.Bin();

    const nepaliDate = NepaliDateLib.NepaliDate.getNepaliDate();

    this.pannelButtonLabel = new St.Label({
      text: nepaliDate,
      y_align: Clutter.ActorAlign.CENTER,
    });

    this.pannelButton.set_child(this.pannelButtonLabel);

    Main.panel._centerBox.insert_child_at_index(this.pannelButton, 1);
  }

  disable() {
    Main.panel._centerBox.remove_child(this.pannelButton);
  }
}

function init() {
  return new Extension();
}
