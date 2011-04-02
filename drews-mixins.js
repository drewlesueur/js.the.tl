(function() {
  _.mixin({
    s: function(val, start, end) {
      var need_to_join, ret;
      need_to_join = false;
      ret = [];
      if (_.isString(val)) {
        val = val.split("");
        need_to_join = true;
      }
      if (start >= 0) {} else {
        start = val.length + start;
      }
      if (_.isUndefined(end)) {
        ret = val.slice(start);
      } else {
        if (end < 0) {
          end = val.length + end;
        } else {
          end = end + start;
        }
        ret = val.slice(start, end);
      }
      if (need_to_join) {
        return ret.join("");
      } else {
        return ret;
      }
    },
    startsWith: function(str, with_what) {
      return _.s(str, 0, with_what.length) === with_what;
    },
    rnd: function(low, high) {
      return Math.floor(Math.random() * (high - low + 1)) + low;
    },
    time: function() {
      return (new Date()).getTime();
    },
    replaceBetween: function(str, start, between, end) {
      var endpos, pos;
      pos = str.indexOf(start);
      if (pos === -1) {
        return str;
      }
      endpos = str.indexOf(end, pos + start.length);
      if (endpos === -1) {
        return str;
      }
      return _.s(str, 0, pos + start.length) + between + _.s(str, endpos);
    },
    trimLeft: function(obj) {
      return obj.toString().replace(/^\s+/, "");
    },
    trimRight: function(obj) {
      return obj.toString().replace(/\s+$/, "");
    },
    isNumeric: function(str) {
      return _.s(str, 0, 1).match(/\d/);
    },
    capitalize: function(str) {
      return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
    }
  });
  _.mixin({
    doThese: function(to_dos, callback) {
      var make_jobs_done, return_values;
      return_values = _.isArray(to_dos) ? [] : {};
      make_jobs_done = function(id) {
        return function(ret) {
          var all_done;
          return_values[id] = ret;
          all_done = true;
          _.each(to_dos, function(func, id) {
            if (!(id in return_values)) {
              return all_done = false;
            }
          });
          if (all_done === true) {
            return callback(return_values);
          }
        };
      };
      return _.each(to_dos, function(to_do, id) {
        var jobs_done;
        jobs_done = make_jobs_done(id);
        return to_do(jobs_done);
      });
    }
  });
}).call(this);
