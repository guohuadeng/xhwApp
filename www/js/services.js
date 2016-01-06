angular.module('todo.io.services', [])

.provider('dummyData', function() {
    var menus = [
        { title: '所有任务', badge: 25, groupId: -1, display: true, edit:false},
        { title: '已完成', badge: 6, groupId: -2, display: false, edit:false},
        { title: '今天', badge: 2, groupId: -3, display: true, edit:false},
        { title: '巡检路线', badge: 5, groupId: 1, display: true, edit:true},
        { title: '工单处理', badge: 7, groupId: 2, display: true, edit:true},
        { title: '抄表', badge: 9, groupId: 3, display: true, edit:true},
        { title: '我的日历', badge: 0, groupId: 5, display: true, edit:true}
    ];
    var todos = [
        { id: 1, type: 1, status: 1, groupId: 1, importance: 2, classname: 'checkbox-energized', title: '荟心园5-1T', date: Date.today().toString("yyyy/MM/dd") },
        { id: 2, type: 2, status: 1, groupId: 1, importance: 3, classname: 'checkbox-assertive', title: '荟心园5-2T', date: Date.today().toString("yyyy/MM/dd") },
        { id: 3, type: 1, status: 1, groupId: 1, importance: 0, classname: 'checkbox-calm', title: '荟心园5-3T', date: Date.today().toString("yyyy/MM/dd") },
        { id: 4, type: 2, status: 1, groupId: 1, importance: 1, classname: 'checkbox-calm', title: '荟心园6-1T', date: Date.today().toString("yyyy/MM/dd") },
        { id: 5, type: 1, status: 1, groupId: 1, importance: 0, classname: 'checkbox-stable', title: '荟心园6-2T', date: Date.today().toString("yyyy/MM/dd") },
        { id: 6, type: 2, status: 1, groupId: 1, importance: 0, classname: 'checkbox-stable', title: '荟心园6-1T车库', date:  Date.today().toString("yyyy/MM/dd") },
        { id: 7, type: 1, status: 1, groupId: 1, importance: 2, classname: 'checkbox-energized', title: '荟心路10栋', date: '2016/01/07' },
        { id: 8, type: 2, status: 1, groupId: 1, importance: 3, classname: 'checkbox-assertive', title: '悦心园', date: '2016/01/07' },
        { id: 9, type: 1, status: 1, groupId: 1, importance: 0, classname: 'checkbox-calm', title: '怡心园1-1T', date: '2016/01/09' },
        { id: 10, type: 2, status: 1, groupId: 1, importance: 1, classname: 'checkbox-calm', title: '怡心园1-2T', date: '2016/01/10' },
        { id: 11, type: 1, status: 1, groupId: 1, importance: 0, classname: 'checkbox-stable', title: '怡心园1-3T', date: '2015/05/21' },
        { id: 12, type: 2, status: 1, groupId: 1, importance: 0, classname: 'checkbox-stable', title: '赏心园1-1T', date: Date.today().toString("yyyy/MM/dd") },
        { id: 13, type: 1, status: 1, groupId: 1, importance: 2, classname: 'checkbox-energized', title: '赏心园1-1T车库', date: '2015/05/23' },
        { id: 14, type: 2, status: 1, groupId: 1, importance: 3, classname: 'checkbox-assertive', title: '赏心园1-2T', date: '2015/05/24' },
        { id: 15, type: 1, status: 1, groupId: 1, importance: 0, classname: 'checkbox-calm', title: '赏心园1-3T', date: '2015/05/25' },
        { id: 16, type: 2, status: 1, groupId: 1, importance: 1, classname: 'checkbox-calm', title: '一期南门', date: Date.today().toString("yyyy/MM/dd") },
        { id: 17, type: 1, status: 1, groupId: 1, importance: 0, classname: 'checkbox-stable', title: '二期东门', date: '2015/05/26' },
        { id: 18, type: 2, status: 2, groupId: 2, importance: 0, classname: 'checkbox-stable', title: '赏心园10栋302门坏了', date: '2015/05/28' },
        { id: 19, type: 1, status: 1, groupId: 2, importance: 2, classname: 'checkbox-energized', title: '赏心园10栋电梯异响', date: '2015/05/29' },
        { id: 20, type: 2, status: 1, groupId: 2, importance: 3, classname: 'checkbox-assertive', title: '一期南门绿化有问题', date: '2015/05/30' },
        { id: 21, type: 1, status: 1, groupId: 2, importance: 0, classname: 'checkbox-calm', title: '一期门禁故障', date: '2015/08/21' },
        { id: 22, type: 2, status: 2, groupId: 2, importance: 1, classname: 'checkbox-calm', title: '四期园区鹅卵石漏沙', date: '2015/08/22' },
        { id: 23, type: 1, status: 1, groupId: 2, importance: 0, classname: 'checkbox-stable', title: '长河鱼池有漂浮物!', date: '2015/08/23' },
        { id: 24, type: 2, status: 1, groupId: 3, importance: 0, classname: 'checkbox-stable', title: '一期用户表抄表', date: Date.today().toString("yyyy/MM/dd") },
        { id: 25, type: 2, status: 1, groupId: 3, importance: 0, classname: 'checkbox-stable', title: '一期公用表抄表', date: Date.today().toString("yyyy/MM/dd") },
        { id: 26, type: 1, status: 1, groupId: 3, importance: 0, classname: 'checkbox-stable', title: '二期用户表抄表', date: '2016/08/25' }
    ];
    this.$get = function() {
        return {menus: menus, todos: todos};
    };
})

.factory('MenuService', function ($q, dummyData) {
  return {
    findAll: function (display) {
        var deferred = $q.defer();
        var results = dummyData.menus.filter(function(element) {
            if (display === undefined) {
                return true;
            } else {
                return display === element.display;
            }
        });
        deferred.resolve(results);
        return deferred.promise;
    },
    findGroupName: function(groupId) {
        var deferred = $q.defer();
        var results = dummyData.menus.filter(function(element) {
            return parseInt(groupId) === element.groupId;
        });
        deferred.resolve(results);
        return deferred.promise;
    }
  }
})

.factory('TodoListService', function ($q, dummyData) {
    return {
        findByGroupId: function (groupId, status, sortKey) {
            var deferred = $q.defer();
            var results = dummyData.todos.filter(function(element) {
                if (groupId == -1) {
                    return parseInt(status) === element.status;
                }
                if (groupId == -2) {
                    return 2 === element.status;
                }
                if (groupId == -3) {
                    return Date.today().equals(Date.parse(element.date, "yyyy/MM/dd"))
                            && parseInt(status) === element.status;
                }
                return parseInt(groupId) === element.groupId
                        && parseInt(status) === element.status;
            });
            var results = results.sort(function(a, b){
               switch ( sortKey ) {
                  case "date":
                    return a.date > b.date;
                  case "title":
                    return a.title > b.title;
                  case "importance":
                    return parseInt(b.importance) - parseInt(a.importance);
                  default:
                    return parseInt(a.id) - parseInt(b.id);
               }
            });
            deferred.resolve(results);
            return deferred.promise;
        },
        findByTitle: function (titleKey) {
            var deferred = $q.defer();
            var results = dummyData.todos.filter(function(element) {
                return element.title.indexOf(titleKey) == -1 ? false : true;
            });
            deferred.resolve(results);
            return deferred.promise;
        }
    }
})
