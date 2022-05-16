var lengthOfLongestSubstring = function(s) {
    var set  = new Set();
    var maxLength = 0;
    var j = 0;
    for(var i = 0; i < s.length; i++) {
        if (!set.has(s[i])) {
            set.add(s[i]);
            maxLength = Math.max(maxLength, set.size)
        } else {
            while(set.has(s[i])) {{
                set.delete(s[j])
                j++
            }}
            set.add(s[i])
        }
    }
    return maxLength
};

lengthOfLongestSubstring('abcabcbb')