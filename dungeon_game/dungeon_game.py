import os
import random

# draw grid

# pick random location for player

# pick random loction for exit door

# pick random location for monster

# draw player in grid

# take input for movement

# move player unless invalid move past edges of grid

# check for win or loss

# clear the screen and redraw the grid

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

def game_loop():
    monster, door, player = get_locations()
    playing = True

    while playing:
        clear_screen()
        draw_map(player, monster, door)
        valid_moves = get_moves(player)
        print("You're currently in room {}".format(player))
        print("You can move {}".format(", ".join(valid_moves)))
        print("Enter QUIT to quit.")
        get_locations()
        move = input("> ").upper()

        if move == "QUIT":
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
            input("\n *** OUCH!!! YOU JUST RAN INTO A WALL! ***\n")
    else:
        if input("Play Again? [Y/n] ").lower() != "n":
            game_loop()
        else:
            print("\n **Saving your strength for another day, are you? Ok. Bye.")

clear_screen()
print("Welcome to the dungeon")
input("Press RETURN to start.")
clear_screen()
game_loop()
