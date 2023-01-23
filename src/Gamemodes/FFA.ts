/*
    DiepCustom - custom tank game server that shares diep.io's WebSocket protocol
    Copyright (C) 2022 ABCxFF (github.com/ABCxFF)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program. If not, see <https://www.gnu.org/licenses/>
*/

import GameServer from "../Game";
import ArenaEntity from "../Native/Arena";
import { ArenaFlags } from "../Const/Enums";
import ShapeManager from "../Entity/Shape/Manager";

/**
 * FFA Gamemode Arena
 */

export class SandboxShapeManager extends ShapeManager {
    protected get wantedShapes() {
        let i = 0;
        for (const client of this.game.clients) {
            if (client.camera) i += 1;
        }
        return Math.floor(i * 12.5);
    }
}
export default class FFAArena extends ArenaEntity {
    protected shapes: ShapeManager = new SandboxShapeManager(this);
    public constructor(game: GameServer) {
        
        super(game);
        this.updateBounds(15000, 15000);

        this.arenaData.values.flags |= ArenaFlags.canUseCheats;
    }
}