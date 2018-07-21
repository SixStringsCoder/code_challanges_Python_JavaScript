'''
DUNGEON ESCAPE is a command-line game made with Python 3.6.  The objective of the game is to move throughout the dungeon-grid
to find the door to safety and avoiding the monster.

'''


import os
import time
import random

CELLS = [ (0, 0), (1, 0), (2, 0), (3, 0), (4, 0),
          (0, 1), (1, 1), (2, 1), (3, 1), (4, 1),
          (0, 2), (1, 2), (2, 2), (3, 2), (4, 2),
          (0, 3), (1, 3), (2, 3), (3, 3), (4, 3),
          (0, 4), (1, 4), (2, 4), (3, 4), (4, 4)]

def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')


# def draw_gameboard():
#     player = "(``)"
#     monster = "X^_^X"
#     door = "D"
#
#     for wall in range(1, len(CELLS)+1):
#         if wall % 5 == 0:
#             print("|¯¯|",  end="\n")
#         else:
#             print("|¯¯", end='')

def draw_map(player, monster, door):
    print(" _" * 5)
    tile = "|{}"

    for cell in CELLS:
        x, y = cell
        if x < 4:
            make_next_cell = ""
            if cell == player:
                output = tile.format("U")
            else:
                output = tile.format("_")
        else:
            make_next_cell = "\n"
            if cell == player:
                output = tile.format("U|")
            else:
                output = tile.format("_|")
        print(output, end=make_next_cell)

def get_locations() -> list:
    return random.sample(CELLS, 3) # returns list of tuples

    return tuple((monster, door, player))

def move_player(player, move):
    x, y = player
    if move == "LEFT":
        x -= 1
    if move == "RIGHT":
        x += 1
    if move == "UP":
        y -= 1
    if move == "DOWN":
        y += 1
    return x, y

def get_moves(player):
    moves = ["LEFT", "RIGHT", "UP", "DOWN"]
    x, y = player
    if x == 0:
        moves.remove("LEFT")
    if x == 4:
        moves.remove("RIGHT")
    if y == 0:
        moves.remove("UP")
    if y == 4:
        moves.remove("DOWN")
    return moves

def incident():
    unfortunate_incident = ["A BUG FLEW INTO YOUR NOSE",
                            "A TORCH HAS CAUGHT YOUR HAIR ON FIRE",
                            "A SPIDER HAS BITTEN YOUR EAR LOBE",
                            "YOU'VE BLOODIED YOUR NOSE AND HAVE NO TISSUE.",
                            "LOST THE ONLY KIDNEY YOU HAVE LEFT",
                            "YOUR 401k HAS JUST LOST HALF ITS VALUE",
                            "YOU'VE INFLAMED AN OLD FOOTBALL INJURY FROM HIGH SCHOOL",
                            "HEAR YOUR WIFE IN YOUR HEAD CALLING YOU CLUMSY"
                            ]
    occurred = random.randint(0, len(unfortunate_incident)-1)
    return unfortunate_incident[occurred]

def game_loop():
    monster, door, player = get_locations()
    playing = True

    while playing:
        clear_screen()
        draw_map(player, monster, door)
        valid_moves = get_moves(player)
        # print("You're currently in room {}".format(player))
        print("You can move {}".format(" or ".join(valid_moves)))
        print("Enter Q to quit.")
        get_locations()
        move = input("> ").upper()

        if move == "Q":
            print("\n** Planning your escape for another day? Very well. **\n")
            break
        if move in valid_moves:
            player = move_player(player, move)

            if player == monster:
                print("\n *** THE MONSTER SWALLOWED YOU IN ONE GULP.  YOU, GOOD SIR, ARE NO MORE! ***")
                playing = False
            elif player == door:
                print("\n *** YOU HAVE LOCATED THE DOOR OUT OF THIS HELL HOLE.  RUN! I SAY, RUN, GOOD SIR!")
                playing = False
        else:
            print("\n *** YOU JUST RAN INTO A WALL AND {}. GATHER YOURSELF AND TRY AGAIN. ***\n".format(incident()))
            time.sleep(3.300)
    else:
        if input("Play Again? [Y/n] ").lower() != "n":
            game_loop()
        else:
            print("\n *** Saving your strength for another day, are you? Very well. Remember to drink Kombucha to aid in digestion!")

clear_screen()
print("You're trapped in the dungeon.")
input("Press RETURN to start your escape.")
clear_screen()
game_loop()
