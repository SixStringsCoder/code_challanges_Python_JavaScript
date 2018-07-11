def future_ages():
    # Name
    name = input("What's your name? ")
    # Age
    while True:
        year_born = input("What year were you born? ")
        try:
            year_born = int(year_born)
        except ValueError:
            continue
        else:
            break
    # The Facts
    current_year = 2018
    now_age = current_year - int(year_born)
    ages = [25, 50, 75, 100]
    # Holy crap!  Now way! Am I really that old!
    for age in ages:
        if now_age < age:
            future_age_year = (age - now_age) + current_year
            response = "{}, you'll be {} in {}.".format(name, age, future_age_year)
            print(response)
        else:
            continue
