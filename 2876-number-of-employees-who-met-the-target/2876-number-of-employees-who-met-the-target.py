
class Solution(object):
    def numberOfEmployeesWhoMetTarget(self, hours, target):
        """
        :type hours: List[int]
        :type target: int
        :rtype: int
        """
        count = 0
        for hour in hours:  # Iterate over elements, not indices
            if hour >= target:  # Simplify the condition
                count += 1

        return count





        