"""
Problem: Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

Difficulty: Medium
"""


def can_attend_all_appointments(appointments):
    if len(appointments) < 2:
        return True

    appointments.sort(key=lambda appointment: appointment[0])

    for index in range(len(appointments) - 1):
        if appointments[index][1] > appointments[index + 1][0]:
            return False

    return True
