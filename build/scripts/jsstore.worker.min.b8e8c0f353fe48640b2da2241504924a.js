/*!
 * @license :jsstore - V3.3.1 - 04/08/2019
 * https://github.com/ujjwalguptaofficial/JsStore
 * Copyright (c) 2019 @Ujjwal Gupta; Licensed MIT
 */
var JsStoreWorker = function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  return n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      n.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 22);
}([function (e, t, n) {
  "use strict";

  var r, o, i, u, c, s, a, h;
  n.d(t, "f", function () {
    return r;
  }), n.d(t, "b", function () {
    return i;
  }), n.d(t, "c", function () {
    return u;
  }), n.d(t, "d", function () {
    return c;
  }), n.d(t, "g", function () {
    return s;
  }), n.d(t, "e", function () {
    return a;
  }), n.d(t, "a", function () {
    return h;
  }), function (e) {
    e.First = "f", e.Last = "l", e.Any = "a";
  }(r || (r = {})), function (e) {
    e.Registered = "registerd", e.Failed = "failed", e.NotStarted = "not_started";
  }(o || (o = {})), function (e) {
    e.Connected = "connected", e.Closed = "closed", e.NotStarted = "not_started", e.UnableToStart = "unable_to_start", e.ClosedByJsStore = "closed_by_jsstore";
  }(i || (i = {})), function (e) {
    e.String = "string", e.Object = "object", e.Array = "array", e.Number = "number", e.Boolean = "boolean", e.Null = "null", e.DateTime = "date_time";
  }(u || (u = {})), function (e) {
    e.UndefinedColumn = "undefined_column", e.UndefinedValue = "undefined_value", e.UndefinedColumnName = "undefined_column_name", e.UndefinedDbName = "undefined_database_name", e.UndefinedColumnValue = "undefined_column_value", e.NotArray = "not_array", e.NoValueSupplied = "no_value_supplied", e.ColumnNotExist = "column_not_exist", e.EnableSearchOff = "enable_search_off", e.InvalidOp = "invalid_operator", e.NullValue = "null_value", e.WrongDataType = "wrong_data_type", e.NextJoinNotExist = "next_join_not_exist", e.TableNotExist = "table_not_exist", e.DbNotExist = "db_not_exist", e.ConnectionAborted = "connection_aborted", e.ConnectionClosed = "connection_closed", e.NotObject = "not_object", e.InvalidConfig = "invalid_config", e.DbBlocked = "Db_blocked", e.IndexedDbNotSupported = "indexeddb_not_supported", e.NullValueInWhere = "null_value_in_where", e.InvalidJoinQuery = "invalid_join_query", e.InvalidOrderQuery = "invalid_order_query", e.InvalidQuery = "invalid_query";
  }(c || (c = {})), function (e) {
    e.Where = "where", e.Like = "like", e.Regex = "regex", e.In = "in", e.Between = "-", e.GreaterThan = ">", e.LessThan = "<", e.GreaterThanEqualTo = ">=", e.LessThanEqualTo = "<=", e.NotEqualTo = "!=", e.Aggregate = "aggregate", e.Max = "max", e.Min = "min", e.Avg = "avg", e.Count = "count", e.Sum = "sum", e.Or = "or", e.Skip = "skip", e.Limit = "limit", e.And = "and", e.IgnoreCase = "ignoreCase";
  }(s || (s = {})), function (e) {
    e.ReadOnly = "readonly", e.ReadWrite = "readwrite";
  }(a || (a = {})), function (e) {
    e.InitDb = "init_db", e.IsDbExist = "is_db_exist", e.GetDbVersion = "get_db_version", e.GetDbList = "get_db_list", e.Get = "get", e.Set = "set", e.Select = "select", e.Insert = "insert", e.Update = "update", e.Remove = "remove", e.GetDbSchema = "get_db_schema", e.OpenDb = "open_db", e.Clear = "clear", e.DropDb = "drop_db", e.Count = "count", e.BulkInsert = "bulk_insert", e.ChangeLogStatus = "change_log_status", e.Transaction = "transaction", e.FinishTransaction = "finish_transaction", e.Terminate = "terminate", e.InitKeyStore = "init_keystore", e.CloseDb = "close_db";
  }(h || (h = {}));
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return i;
  });

  var r = n(0),
      o = n(8),
      i = function () {
    function e(e, t) {
      void 0 === t && (t = null), this.type = e, this.info_ = t, this.message = this.getMsg_();
    }

    return e.prototype.throw = function () {
      throw this.get();
    }, e.log = function (e) {
      o.a.isLogEnabled && console.log(e);
    }, e.prototype.logError = function () {
      console.error(this.get());
    }, e.prototype.get = function () {
      return {
        message: this.message,
        type: this.type
      };
    }, e.prototype.getMsg_ = function () {
      var e;

      switch (this.type) {
        case r.d.NotArray:
          e = "Supplied value is not an array";
          break;

        case r.d.UndefinedColumn:
          e = "Column is undefined in Where";
          break;

        case r.d.UndefinedValue:
          e = "Value is undefined in Where";
          break;

        case r.d.UndefinedColumnName:
          e = "Column name is undefined '" + this.info_.TableName + "'";
          break;

        case r.d.UndefinedDbName:
          e = "Database name is not supplied";
          break;

        case r.d.UndefinedColumnValue:
          e = "Column value is undefined";
          break;

        case r.d.NoValueSupplied:
          e = "No value is supplied";
          break;

        case r.d.InvalidOp:
          e = "Invalid Op Value '" + this.info_.Op + "'";
          break;

        case r.d.ColumnNotExist:
          e = this.info_.isOrder ? "Column '" + this.info_.column + "' in order query does not exist" : "Column '" + this.info_.column + "' does not exist";
          break;

        case r.d.EnableSearchOff:
          e = "Search is turned off for the Column '" + this.info_.ColumnName + "'";
          break;

        case r.d.NullValue:
          e = "Null value is not allowed for column '" + this.info_.ColumnName + "'";
          break;

        case r.d.WrongDataType:
          e = "Supplied value for column '" + this.info_.ColumnName + "' have wrong data type";
          break;

        case r.d.NextJoinNotExist:
          e = "Next join details not supplied";
          break;

        case r.d.TableNotExist:
          e = "Table '" + this.info_.tableName + "' does not exist";
          break;

        case r.d.DbNotExist:
          e = "Database with name " + this.info_.dbName + " does not exist";
          break;

        case r.d.NotObject:
          e = "supplied value is not object";
          break;

        case r.d.InvalidOp:
          e = "Invalid Config '" + this.info_.Config + " '";
          break;

        case r.d.DbBlocked:
          e = "database is blocked, cant be deleted right now";
          break;

        case r.d.NullValueInWhere:
          e = "Null/undefined is not allowed in where. Column '" + this.info_.column + "' has null";
          break;

        case r.d.InvalidJoinQuery:
          e = this.info_;
          break;

        default:
          e = this.message;
      }

      return e;
    }, e;
  }();
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return c;
  });

  var r = n(0),
      o = n(7),
      i = n(19),
      u = n(12),
      c = function () {
    function e() {}

    return e.callDbDroppedByBrowser = function (t) {
      e.dbStatus.conStatus === r.b.Connected && (e.isDbDeletedByBrowser = !0, !0 === t && new i.a(function () {}, function () {}).deleteMetaData());
    }, e.createTransaction = function (t, n, o) {
      if (null === e.transaction) {
        o = o || r.e.ReadWrite, e.transaction = e.dbConnection.transaction(t, o);

        var i = function i() {
          e.transaction = null, n();
        };

        e.transaction.oncomplete = i, e.transaction.onabort = i;
      }
    }, e.setDbList = function (e) {
      return o.a.set("DataBase_List", e);
    }, e.updateDbStatus = function (t, n) {
      void 0 === n ? e.dbStatus.conStatus = t : e.dbStatus = {
        conStatus: t,
        lastError: n
      };
    }, e.getDbList = function () {
      return Object(u.a)(function (e, t) {
        o.a.get("DataBase_List").then(function (t) {
          e(null == t ? [] : t);
        }).catch(t);
      });
    }, e.getDbVersion = function (e) {
      return Object(u.a)(function (t, n) {
        o.a.get("JsStore_" + e + "_Db_Version").then(function (e) {
          t(Number(e));
        }).catch(n);
      });
    }, e.getDbSchema = function (e) {
      return o.a.get("JsStore_" + e + "_Schema");
    }, e.getTable = function (t) {
      return e.activeDb.tables.find(function (e) {
        return e.name === t;
      });
    }, e.transaction = null, e.activeDbVersion = 0, e.dbStatus = {
      conStatus: r.b.NotStarted
    }, e;
  }();
},, function (e, t, n) {
  "use strict";

  var r = n(0),
      o = n(2),
      i = n(1),
      u = function u(e) {
    if (null == e) return !0;

    switch (typeof e) {
      case "string":
        return 0 === e.length;

      case "number":
        return isNaN(e);
    }

    return !1;
  },
      c = n(32),
      s = function () {
    function e(e) {
      this.table = e;
    }

    return e.prototype.check = function (e, t) {
      var n = this,
          o = null;
      return typeof e === r.c.Object ? this.table ? this.table.columns.every(function (t) {
        return null === o && (t.name in e && (o = n.checkByColumn_(t, e[t.name])), !0);
      }) : o = new i.a(r.d.TableNotExist, {
        tableName: t
      }) : o = new i.a(r.d.NotObject), null != o ? o.get() : null;
    }, e.prototype.checkByColumn_ = function (e, t) {
      var n = null;
      !0 === e.notNull && u(t) && (n = new i.a(r.d.NullValue, {
        ColumnName: e.name
      }));
      var o = Object(c.a)(t),
          s = null != t;
      if (e.dataType && s && o !== e.dataType && "object" !== o && (n = new i.a(r.d.WrongDataType, {
        ColumnName: e.name
      })), s && "object" === o) for (var a = ["+", "-", "*", "/"], h = 0, l = Object.keys(t); h < l.length; h++) {
        var f = l[h];
        a.indexOf(f) < 0 && e.dataType && o !== e.dataType && (n = new i.a(r.d.WrongDataType, {
          ColumnName: e.name
        }));
        break;
      }
      return n;
    }, e;
  }(),
      a = function () {
    function e(e, t) {
      this.errorOccured = !1, this.autoIncrementValue = {}, this.table = e, this.autoIncrementValue = t;
    }

    return e.prototype.checkAndModifyValue = function (e) {
      var t = this;
      return this.value = e, this.table.columns.every(function (e) {
        return t.checkAndModifyColumnValue_(e), !t.errorOccured;
      }), this.errorOccured;
    }, e.prototype.checkNotNullAndDataType_ = function (e) {
      e.notNull && u(this.value[e.name]) ? this.onValidationError_(r.d.NullValue, {
        ColumnName: e.name
      }) : e.dataType && !u(this.value[e.name]) && Object(c.a)(this.value[e.name]) !== e.dataType && this.onValidationError_(r.d.WrongDataType, {
        ColumnName: e.name
      });
    }, e.prototype.checkAndModifyColumnValue_ = function (e) {
      var t = this.value[e.name];
      e.autoIncrement ? u(t) ? this.value[e.name] = ++this.autoIncrementValue[e.name] : Object(c.a)(t) === r.c.Number && t > this.autoIncrementValue[e.name] && (this.autoIncrementValue[e.name] = t) : e.default && u(t) && (this.value[e.name] = e.default), this.checkNotNullAndDataType_(e);
    }, e.prototype.onValidationError_ = function (e, t) {
      this.errorOccured = !0, this.log = new i.a(e, t);
    }, e;
  }(),
      h = n(12),
      l = n(23),
      f = n(9),
      p = function () {
    function e(e, t) {
      this.table = e, this.values = t;
    }

    return e.prototype.checkAndModifyValues = function () {
      var e = this;
      return Object(h.a)(function (t, n) {
        var r = function r(_r) {
          e.valueCheckerObj = new a(e.table, _r), e.startChecking().then(t).catch(n);
        };

        !1 === f.a.isTransactionQuery ? Object(l.a)(e.table).then(function (e) {
          r(e);
        }).catch(n) : r(_.autoIncrementValues[e.table.name]);
      });
    }, e.prototype.startChecking = function () {
      var e = this;
      return Object(h.a)(function (t, n) {
        var r = !1;
        (e.values.every(function (t) {
          return !(r = e.valueCheckerObj.checkAndModifyValue(t));
        }), r) && n(e.valueCheckerObj.log.get());
        var o = Object(l.b)(e.table, e.valueCheckerObj.autoIncrementValue);
        !1 === f.a.isTransactionQuery ? o.then(t).catch(n) : t();
      });
    }, e;
  }();

  n.d(t, "a", function () {
    return _;
  });

  var _ = function () {
    function e(e, t) {
      this.isTransaction = !1, this.api = e, this.query = t;
    }

    return e.prototype.checkAndModify = function () {
      var e = this;
      return Object(h.a)(function (t, n) {
        var o = function o() {
          null == e.error ? t() : n(e.error);
        };

        switch (e.api) {
          case r.a.Select:
          case r.a.Remove:
          case r.a.Count:
            e.checkFetchQuery_(), o();
            break;

          case r.a.Insert:
            e.checkInsertQuery_().then(o).catch(function (t) {
              e.error = t, o();
            });
            break;

          case r.a.Update:
            e.checkUpdateQuery_(), o();
            break;

          case r.a.BulkInsert:
            e.checkBulkInsert_();
        }
      });
    }, e.prototype.isInsertQryValid_ = function (e) {
      var t,
          n = this.getTable_(this.query.into);
      if (n) switch (Object(c.a)(this.query.values)) {
        case r.c.Array:
          break;

        case r.c.Null:
          t = new i.a(r.d.NoValueSupplied);
          break;

        default:
          t = new i.a(r.d.NotArray);
      } else t = new i.a(r.d.TableNotExist, {
        tableName: this.query.into
      });
      return e(n), null == t ? null : t.get();
    }, e.prototype.checkBulkInsert_ = function () {
      this.error = this.isInsertQryValid_(function () {});
    }, e.prototype.checkInsertQuery_ = function () {
      var e = this;
      return Object(h.a)(function (t, n) {
        var r,
            o = e.isInsertQryValid_(function (e) {
          r = e;
        });
        if (null == o) {
          if (!0 === e.query.skipDataCheck) t();else {
            var i = new p(r, e.query.values);
            i.checkAndModifyValues().then(function () {
              e.query.values = i.values, t();
            }).catch(n);
          }
        } else n(o);
      });
    }, e.prototype.checkUpdateQuery_ = function () {
      this.error = new s(this.getTable_(this.query.in)).check(this.query.set, this.query.in), null == this.error && null != this.query.where && (this.checkForNullInWhere_(), null == this.error && this.addGreatAndLessToNotOp_());
    }, e.prototype.checkForNullInWhere_ = function () {
      for (var e in this.query.where) {
        if (null == this.query.where[e]) return void (this.error = new i.a(r.d.NullValueInWhere, {
          column: e
        }).get());
      }
    }, e.prototype.checkFetchQuery_ = function () {
      !0 === this.isTableExist_(this.query.from) ? null != this.query.where && (this.checkForNullInWhere_(), null == this.error && this.addGreatAndLessToNotOp_()) : this.error = new i.a(r.d.TableNotExist, {
        tableName: this.query.from
      }).get();
    }, e.prototype.isTableExist_ = function (e) {
      return this.activeDb_.tables.findIndex(function (t) {
        return t.name === e;
      }) >= 0;
    }, Object.defineProperty(e.prototype, "activeDb_", {
      get: function get() {
        return o.a.activeDb;
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.getTable_ = function (e) {
      return o.a.getTable(e);
    }, e.prototype.addGreatAndLessToNotOp_ = function () {
      var e = this.query.where,
          t = function t(e, _t) {
        return _t.findIndex(function (t) {
          return null != e[t][r.g.NotEqualTo];
        }) >= 0;
      },
          n = function n(e, t) {
        var n;
        return t.forEach(function (t) {
          null != (n = e[t])[r.g.NotEqualTo] && (e[t][r.g.GreaterThan] = n[r.g.NotEqualTo], void 0 === e[r.g.Or] ? (e[r.g.Or] = {}, e[r.g.Or][t] = {}) : void 0 === e[r.g.Or][t] && (e[r.g.Or][t] = {}), e[r.g.Or][t][r.g.LessThan] = n[r.g.NotEqualTo], delete e[t][r.g.NotEqualTo]);
        }), e;
      };

      switch (Object(c.a)(e)) {
        case r.c.Object:
          var o = Object.keys(e);
          if (t(e, o)) if (1 === o.length) this.query.where = n(e, o);else {
            var i = [];
            o.forEach(function (t) {
              var r;
              i.push(n(((r = {})[t] = e[t], r), [t]));
            }), this.query.where = i;
          }
          break;

        default:
          var u = [];
          e.forEach(function (e) {
            var r = Object.keys(e);
            t(e, r) && (e = n(e, r)), u.push(e);
          }), this.query.where = u;
      }
    }, e.autoIncrementValues = {}, e;
  }();
},, function (e, t, n) {
  "use strict";

  var r = n(2),
      o = n(0),
      i = function () {
    function e() {}

    return Object.defineProperty(e.prototype, "activeDb", {
      get: function get() {
        return r.a.activeDb;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "dbConnection", {
      get: function get() {
        return r.a.dbConnection;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "transaction", {
      get: function get() {
        return r.a.transaction;
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.createTransaction = function (e, t, n) {
      r.a.createTransaction(e, t, n);
    }, e.prototype.regexTest = function (e) {
      return this.regexExpression.test(e);
    }, e.prototype.isTableExist = function (e) {
      return this.activeDb.tables.findIndex(function (t) {
        return t.name === e;
      }) >= 0;
    }, e.prototype.getTable = function (e) {
      return r.a.getTable(e);
    }, e.prototype.getKeyRange = function (e, t) {
      var n;

      switch (t) {
        case o.g.Between:
          n = IDBKeyRange.bound(e.low, e.high, !1, !1);
          break;

        case o.g.GreaterThan:
          n = IDBKeyRange.lowerBound(e, !0);
          break;

        case o.g.GreaterThanEqualTo:
          n = IDBKeyRange.lowerBound(e);
          break;

        case o.g.LessThan:
          n = IDBKeyRange.upperBound(e, !0);
          break;

        case o.g.LessThanEqualTo:
          n = IDBKeyRange.upperBound(e);
          break;

        default:
          n = IDBKeyRange.only(e);
      }

      return n;
    }, e.prototype.getPrimaryKey = function (e) {
      var t = this.getTable(e).primaryKey;
      return t || this.getKeyPath(e);
    }, e.prototype.getKeyPath = function (e) {
      return this.dbConnection.transaction([e], "readonly").objectStore(e).keyPath;
    }, e.prototype.getAllCombinationOfWord = function (e, t) {
      if (t) {
        for (var n = [], r = 0, o = e.length; r < o; r++) {
          n = n.concat(this.getCombination_(e[r]));
        }

        return n;
      }

      return this.getCombination_(e);
    }, e.prototype.getCombination_ = function (e) {
      var t = [],
          n = function n(e, r, o) {
        if (o === e.length) t.push(r.join(""));else {
          var i = e.charAt(o);
          r[o] = i.toLowerCase(), n(e, r, o + 1), r[o] = i.toUpperCase(), n(e, r, o + 1);
        }
      };

      return n(e, [], 0), t;
    }, e;
  }(),
      u = function () {
    function e(e, t) {
      this.where = e, this.checkFlag = t;
    }

    return e.prototype.check = function (e) {
      if (this.status = !0, !0 === this.checkFlag) for (var t in this.where) {
        if (!this.status) break;
        var n = this.where[t];
        if ("object" == typeof n) for (var r in n) {
          if (!this.status) break;

          switch (r) {
            case o.g.In:
              this.checkIn(t, e[t]);
              break;

            case o.g.Like:
              this.checkLike(t, e[t]);
              break;

            case o.g.Regex:
              this.checkRegex(t, e[t]);
              break;

            case o.g.Between:
            case o.g.GreaterThan:
            case o.g.LessThan:
            case o.g.GreaterThanEqualTo:
            case o.g.LessThanEqualTo:
            case o.g.NotEqualTo:
              this.checkComparisionOp(t, e[t], r);
          }
        } else this.status = n === e[t];
      }
      return this.status;
    }, e.prototype.checkIn = function (e, t) {
      for (var n = 0, r = this.where[e][o.g.In], i = r.length; n < i; n++) {
        if (r[n] === t) {
          this.status = !0;
          break;
        }

        this.status = !1;
      }
    }, e.prototype.checkLike = function (e, t) {
      var n,
          r,
          i,
          u = this.where[e][o.g.Like].split("%");

      switch (u[1] ? (r = u[1], n = u.length > 2 ? o.f.Any : o.f.Last) : (r = u[0], n = o.f.First), t = t.toLowerCase(), n) {
        case o.f.Any:
          (i = t.indexOf(r.toLowerCase())) < 0 && (this.status = !1);
          break;

        case o.f.First:
          ((i = t.indexOf(r.toLowerCase())) > 0 || i < 0) && (this.status = !1);
          break;

        default:
          (i = t.lastIndexOf(r.toLowerCase())) < t.length - r.length && (this.status = !1);
      }
    }, e.prototype.checkRegex = function (e, t) {
      var n = this.where[e][o.g.Regex];
      this.status = n.test(t);
    }, e.prototype.checkComparisionOp = function (e, t, n) {
      var r = this.where[e][n];

      switch (n) {
        case o.g.GreaterThan:
          t <= r && (this.status = !1);
          break;

        case o.g.LessThan:
          t >= r && (this.status = !1);
          break;

        case o.g.LessThanEqualTo:
          t > r && (this.status = !1);
          break;

        case o.g.GreaterThanEqualTo:
          t < r && (this.status = !1);
          break;

        case o.g.Between:
          (t < r.Low || t > r.High) && (this.status = !1);
          break;

        case o.g.NotEqualTo:
          t === r && (this.status = !1);
      }
    }, e;
  }(),
      c = n(1),
      s = n(34),
      a = n(32);

  n.d(t, "a", function () {
    return f;
  });

  var _h,
      l = (_h = function h(e, t) {
    return (_h = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    })(e, t);
  }, function (e, t) {
    function n() {
      this.constructor = e;
    }

    _h(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
  }),
      f = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.rowAffected = 0, t;
    }

    return l(t, e), t.prototype.onErrorOccured = function (e, t) {
      if (void 0 === t && (t = !1), t) e.logError(), this.error = e.get();else {
        var n = void 0;
        e.name ? (n = new c.a(e.name)).message = e.message : (n = new c.a(e.target.error.name)).message = e.target.error.message, this.error = n.get();
      }
    }, t.prototype.onExceptionOccured = function (e) {
      console.error(e), this.onError({
        message: e.message,
        type: o.d.InvalidQuery
      });
    }, t.prototype.getColumnInfo = function (e, t) {
      return this.getTable(t).columns.find(function (t) {
        return t.name === e;
      });
    }, t.prototype.getRegexFromLikeExpression_ = function (e) {
      var t,
          n,
          r = e.split("%");

      switch (r[1] ? (t = r[1], n = r.length > 2 ? o.f.Any : o.f.Last) : (t = r[0], n = o.f.First), n) {
        case o.f.First:
          return new RegExp("^" + t, "i");

        case o.f.Last:
          return new RegExp(t + "$", "i");

        default:
          return new RegExp("" + t, "i");
      }
    }, t.prototype.goToWhereLogic = function () {
      var e = Object(s.a)(this.query.where);

      if (!0 === this.query.ignoreCase && (this.query.where = this.makeQryInCaseSensitive(this.query.where)), this.objectStore.indexNames.contains(e)) {
        var t = this.query.where[e];

        if ("object" == typeof t) {
          var n = Boolean(Object.keys(t).length > 1 || Object.keys(this.query.where).length > 1);
          this.whereCheckerInstance = new u(this.query.where, n);
          var r = Object(s.a)(t);

          switch (r) {
            case o.g.Like:
              var i = this.getRegexFromLikeExpression_(t[o.g.Like]);
              this.executeRegexLogic(e, i);
              break;

            case o.g.Regex:
              this.executeRegexLogic(e, t[o.g.Regex]);
              break;

            case o.g.In:
              this.executeInLogic(e, t[o.g.In]);
              break;

            case o.g.Between:
            case o.g.GreaterThan:
            case o.g.LessThan:
            case o.g.GreaterThanEqualTo:
            case o.g.LessThanEqualTo:
              this.executeWhereLogic(e, t, r, "next");
              break;

            case o.g.Aggregate:
              break;

            default:
              this.executeWhereLogic(e, t, null, "next");
          }
        } else {
          n = Boolean(Object.keys(this.query.where).length > 1);
          this.whereCheckerInstance = new u(this.query.where, n), this.executeWhereLogic(e, t, null, "next");
        }
      } else {
        var a = null == this.getColumnInfo(e, this.tableName) ? new c.a(o.d.ColumnNotExist, {
          ColumnName: e
        }) : new c.a(o.d.EnableSearchOff, {
          ColumnName: e
        });
        this.onErrorOccured(a, !0);
      }
    }, t.prototype.makeQryInCaseSensitive = function (e) {
      var t,
          n,
          r = [];

      for (var i in e) {
        switch (t = e[i], Object(a.a)(t)) {
          case o.c.String:
            r = r.concat(this.getAllCombinationOfWord(t)), e[i] = {}, e[i][o.g.In] = r;
            break;

          case o.c.Object:
            for (var u in t) {
              if (n = t[u], typeof n === o.c.String) switch (u) {
                case o.g.In:
                  r = r.concat(this.getAllCombinationOfWord(n, !0));
                  break;

                case o.g.Like:
                case o.g.Regex:
                  break;

                default:
                  r = r.concat(this.getAllCombinationOfWord(n));
              }
            }

            e[i][o.g.In] = r;
        }
      }

      return e;
    }, t;
  }(i);
}, function (e, t, n) {
  "use strict";

  var r;
  !function (e) {
    e.Connected = "connected", e.Closed = "closed", e.NotStarted = "not_connected";
  }(r || (r = {}));

  var _o,
      i = function () {
    function e() {
      this.results = null, this.errorOccured = !1, this.errorCount = 0;
    }

    return e.prototype.onErrorOccured = function (e) {
      ++this.errorCount, 1 === this.errorCount && null != this.onError && this.onError(e.target.error), console.error(e);
    }, e;
  }(),
      u = function () {
    function e() {}

    return e.callDbDroppedByBrowser = function () {
      e.isDbDeletedByBrowser = e.dbStatus.conStatus === r.Connected;
    }, e.createTransaction = function (t, n, r) {
      null === e.transaction && (r = r || "readwrite", e.transaction = e.dbConnection.transaction(t, r), e.transaction.oncomplete = function () {
        e.transaction = null, n();
      }, e.transaction.ontimeout = function () {
        this._transaction = null, console.error("transaction timed out");
      });
    }, e.transaction = null, e.dbStatus = {
      conStatus: r.NotStarted
    }, e;
  }(),
      c = (_o = function o(e, t) {
    return (_o = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    })(e, t);
  }, function (e, t) {
    function n() {
      this.constructor = e;
    }

    _o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
  }),
      s = function (e) {
    function t(t, n, r) {
      var o = e.call(this) || this;
      return o.rowAffected = 0, o.key = t, o.onSuccess = n, o.onError = r, o;
    }

    return c(t, e), t.prototype.execute = function () {
      var e = this;
      this.initTransaction();
      var t, n, r;
      this.errorOccured || (t = g.columnName, n = this.key, (r = e.objectStore.index(t).openCursor(IDBKeyRange.only(n))).onerror = function (t) {
        e.errorOccured = !0, e.onErrorOccured(t);
      }, r.onsuccess = function (t) {
        var n = t.target.result;
        n && (n.delete(), ++e.rowAffected, n.continue());
      });
    }, t.prototype.initTransaction = function () {
      u.createTransaction([g.tableName], this.onTransactionCompleted.bind(this)), this.objectStore = u.transaction.objectStore(g.tableName);
    }, t.prototype.onTransactionCompleted = function () {
      !1 === this.errorOccured && this.onSuccess(this.rowAffected);
    }, t;
  }(i),
      a = function () {
    var _e = function e(t, n) {
      return (_e = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      h = function (e) {
    function t(t, n, r) {
      var o = e.call(this) || this;

      o.onTransactionCompleted_ = function () {
        !1 === o.errorOccured && o.onSuccess && o.onSuccess(null);
      };

      try {
        o.query = t, o.onSuccess = n, o.onError = r;
      } catch (e) {
        console.error(e);
      }

      return o;
    }

    return a(t, e), t.prototype.execute = function () {
      var e,
          t = this,
          n = function n() {
        t.objectStore.add(t.query).onerror = function (e) {
          t.errorOccured = !0, t.onErrorOccured(e);
        };
      };

      this.initTransaction(), (e = t.objectStore.index(g.columnName).openCursor(IDBKeyRange.only(t.query[g.columnName]))).onsuccess = function (e) {
        var r = e.target.result;
        r ? r.update(t.query) : n();
      }, e.onerror = function (e) {
        t.errorOccured = !0, t.onErrorOccured(e);
      };
    }, t.prototype.initTransaction = function () {
      u.createTransaction([g.tableName], this.onTransactionCompleted_), this.objectStore = u.transaction.objectStore(g.tableName);
    }, t;
  }(i),
      l = n(0),
      f = function () {
    function e() {}

    return e.updateDbStatus = function (e, t) {
      void 0 === t ? u.dbStatus.conStatus = e : u.dbStatus = {
        conStatus: e,
        lastError: t
      };
    }, e;
  }(),
      p = function () {
    return function (e, t, n) {
      var o = self.indexedDB.open(e, 1);
      u.isDbDeletedByBrowser = !1, o.onerror = function (e) {
        "InvalidStateError" === e.target.error.name ? n({
          message: "Indexeddb is blocked",
          type: l.d.IndexedDbNotSupported
        }) : n(e.target.error);
      }, o.onsuccess = function (e) {
        u.dbStatus.conStatus = r.Connected, u.dbConnection = o.result, u.dbConnection.onclose = function () {
          u.callDbDroppedByBrowser(), f.updateDbStatus(r.Closed, l.d.ConnectionClosed);
        }, u.dbConnection.onversionchange = function (e) {
          null === e.newVersion && (e.target.close(), u.callDbDroppedByBrowser(), f.updateDbStatus(r.Closed, l.d.ConnectionClosed));
        }, u.dbConnection.onerror = function (e) {
          u.dbStatus.lastError = "Error occured in connection :" + e.target.result;
        }, u.dbConnection.onabort = function (e) {
          u.dbStatus = {
            conStatus: r.Closed,
            lastError: "Connection aborted"
          };
        }, null != t && t();
      }, o.onupgradeneeded = function (e) {
        e.target.result.createObjectStore(g.tableName, {
          keyPath: "Key"
        }).createIndex("Key", "Key", {
          unique: !0
        });
      };
    };
  }(),
      _ = function () {
    var _e2 = function e(t, n) {
      return (_e2 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e2(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      y = function (e) {
    function t(t, n, r) {
      var o = e.call(this) || this;
      return o.onTransactionCompleted_ = function () {
        !1 === o.errorOccured && o.onSuccess(o.results);
      }, o.key = t, o.onSuccess = n, o.onError = r, o;
    }

    return _(t, e), t.prototype.execute = function () {
      var e,
          t,
          n,
          r = this;
      this.initTransaction_(), e = g.columnName, t = this.key, (n = r.objectStore.index(e).openCursor(IDBKeyRange.only(t))).onerror = function (e) {
        r.errorOccured = !0, r.onErrorOccured(e);
      }, n.onsuccess = function (e) {
        var t = e.target.result;
        t && (r.results = t.value.Value);
      };
    }, t.prototype.initTransaction_ = function () {
      u.createTransaction([g.tableName], this.onTransactionCompleted_, "readonly"), this.objectStore = u.transaction.objectStore(g.tableName);
    }, t;
  }(i),
      d = function () {
    function e(e) {
      void 0 === e && (e = null), this.onQueryFinished = e;
    }

    return e.prototype.checkConnectionAndExecuteLogic = function (e) {
      var t = this;
      if ("init_db" === e.name) this.executeLogic(e);else switch (u.dbStatus.conStatus) {
        case r.Connected:
          this.executeLogic(e);
          break;

        case r.NotStarted:
          setTimeout(function () {
            t.checkConnectionAndExecuteLogic(e);
          }, 100);
          break;

        case r.Closed:
          u.isDbDeletedByBrowser && this.createDb(function () {
            u.isDbDeletedByBrowser = !1, t.checkConnectionAndExecuteLogic(e);
          }, function (e) {
            console.error(e);
          });
      }
    }, e.prototype.returnResult = function (e) {
      this.onQueryFinished(e);
    }, e.prototype.executeLogic = function (e) {
      var t = this,
          n = function n(e) {
        t.returnResult({
          returnedValue: e
        });
      },
          r = function r(e) {
        t.returnResult({
          errorDetails: e,
          errorOccured: !0
        });
      };

      switch (e.name) {
        case "get":
          this.get(e.query, n, r);
          break;

        case "set":
          this.set(e.query, n, r);
          break;

        case "remove":
          this.remove(e.query, n, r);
          break;

        case "init_db":
          this.createDb(n, r);
          break;

        case "close_db":
          this.closeDb(n, r);
      }
    }, e.prototype.set = function (e, t, n) {
      new h(e, t, n).execute();
    }, e.prototype.remove = function (e, t, n) {
      new s(e, t, n).execute();
    }, e.prototype.get = function (e, t, n) {
      new y(e, t, n).execute();
    }, e.prototype.createDb = function (e, t) {
      new p("KeyStore", e, t);
    }, e.prototype.closeDb = function (e, t) {
      u.dbStatus.conStatus === r.Connected && (u.dbStatus.conStatus = r.Closed, u.dbConnection.close()), e();
    }, e;
  }(),
      b = n(12),
      g = function () {
    function e() {}

    return e.prcoessQuery = function (e) {
      var t = this;
      return Object(b.a)(function (n, r) {
        e.onSuccess = function (e) {
          n(e);
        }, e.onError = function (e) {
          r(e);
        }, t.requestQueue.push(e), t.executeCode();
      });
    }, e.executeCode = function () {
      if (!this.isCodeExecuting && this.requestQueue.length > 0) {
        this.isCodeExecuting = !0;
        var e = {
          name: this.requestQueue[0].name,
          query: this.requestQueue[0].query
        };
        new d(this.onQueryFinished.bind(this)).checkConnectionAndExecuteLogic(e);
      }
    }, e.onQueryFinished = function (e) {
      var t = this.requestQueue.shift();
      this.isCodeExecuting = !1, e.errorOccured ? t.onError(e.errorDetails) : t.onSuccess(e.returnedValue), this.executeCode();
    }, e.requestQueue = [], e.tableName = "LocalStore", e.columnName = "Key", e.isCodeExecuting = !1, e;
  }();

  n.d(t, "a", function () {
    return v;
  });

  var v = function () {
    function e() {}

    return e.init = function () {
      if (indexedDB) return g.prcoessQuery({
        name: "init_db",
        query: null
      });
    }, e.close = function () {
      return g.prcoessQuery({
        name: "close_db",
        query: null
      });
    }, e.get = function (e) {
      return g.prcoessQuery({
        name: "get",
        query: e
      });
    }, e.set = function (e, t) {
      var n = {
        Key: e,
        Value: t
      };
      return g.prcoessQuery({
        name: "set",
        query: n
      });
    }, e.remove = function (e) {
      return g.prcoessQuery({
        name: "remove",
        query: e
      });
    }, e;
  }();
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return r;
  });

  var r = function () {
    function e() {}

    return e.isLogEnabled = !1, e.isRuningInWorker = !1, e;
  }();
}, function (e, t, n) {
  "use strict";

  var _r2,
      o = n(4),
      i = n(6),
      u = n(7),
      c = (_r2 = function r(e, t) {
    return (_r2 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    })(e, t);
  }, function (e, t) {
    function n() {
      this.constructor = e;
    }

    _r2(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
  }),
      s = function (e) {
    function t(t, n, r) {
      var o = e.call(this) || this;
      return o.query = t, o.onSuccess = n, o.onError = r, o;
    }

    return c(t, e), t.prototype.execute = function () {
      var e = this;
      this.createTransaction([this.query], function () {
        null == e.error ? e.onSuccess() : e.onError(e.error);
      });
      var t = this.transaction.objectStore(this.query).clear();
      t.onsuccess = function (t) {
        e.getTable(e.query).columns.forEach(function (t) {
          t.autoIncrement && u.a.set("JsStore_" + e.activeDb.name + "_" + e.query + "_" + t.name + "_Value", 0);
        });
      }, t.onerror = this.onErrorOccured;
    }, t;
  }(i.a),
      a = n(0),
      h = function () {
    var _e3 = function e(t, n) {
      return (_e3 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e3(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      l = function (e) {
    function t(t, n, r) {
      var o = e.call(this) || this;
      return o.query = t, o.onSuccess = n, o.onError = r, o;
    }

    return h(t, e), t.prototype.execute = function () {
      var e = new o.a(a.a.BulkInsert, this.query);
      if (e.checkAndModify(), null == e.error) try {
        this.bulkinsertData(this.query.values), this.query.values = null;
      } catch (e) {
        this.onExceptionOccured(e);
      } else this.onError(e.error);
    }, t.prototype.bulkinsertData = function (e) {
      var t = this;
      this.createTransaction([this.query.into], function () {
        t.onSuccess();
      }), this.objectStore = this.transaction.objectStore(this.query.into);

      for (var n = !0 === this.query.upsert ? "put" : "add", r = 0, o = e.length; r < o; r++) {
        this.objectStore[n](e[r]);
      }
    }, t;
  }(i.a),
      f = n(2),
      p = n(19),
      _ = n(16),
      y = n(12),
      d = function () {
    var _e4 = function e(t, n) {
      return (_e4 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e4(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      b = function (e) {
    function t(t, n) {
      var r = e.call(this) || this;
      return r.onSuccess = t, r.onError = n, r;
    }

    return d(t, e), t.prototype.execute = function (e) {
      var t = this,
          n = [],
          r = indexedDB.open(this.dbName, this.dbVersion),
          o = !1;
      r.onerror = function (e) {
        null != t.onError && t.onError(e.target.error);
      }, r.onsuccess = function (e) {
        t.dbStatus.conStatus = a.b.Connected, t.dbConnection = r.result, t.dbConnection.onclose = t.onDbClose.bind(t), t.dbConnection.onversionchange = t.onDbVersionChange.bind(t), t.dbConnection.onerror = t.onDbConError.bind(t), o ? t.savedbNameIntoDbList_().then(function () {
          null != t.onSuccess && t.onSuccess(o);
        }) : (t.setPrimaryKey_(), t.onSuccess(o));
      }, r.onupgradeneeded = function (r) {
        o = !0;

        var i = r.target.result,
            c = function c(e, r) {
          try {
            var o;
            e.primaryKey.length > 0 ? (t.activeDb.tables[r].primaryKey = e.primaryKey, o = i.createObjectStore(e.name, {
              keyPath: e.primaryKey
            })) : o = i.createObjectStore(e.name, {
              autoIncrement: !0
            }), e.columns.forEach(function (n) {
              if (!0 === n.enableSearch) {
                var r = n.primaryKey ? {
                  unique: !0
                } : {
                  unique: n.unique
                };
                r.multiEntry = n.multiEntry;
                var i = null == n.keyPath ? n.name : n.keyPath;
                o.createIndex(n.name, i, r), n.autoIncrement && u.a.set("JsStore_" + t.dbName + "_" + e.name + "_" + n.name + "_Value", 0);
              }
            }), n.push(e.name), u.a.set("JsStore_" + t.dbName + "_" + e.name + "_Version", e.version);
          } catch (e) {
            console.error(e);
          }
        };

        e.forEach(function (e, t) {
          e.requireDelete ? (i.objectStoreNames.contains(e.name) && i.deleteObjectStore(e.name), c(e, t)) : e.requireCreation && c(e, t);
        });
      };
    }, t.prototype.savedbNameIntoDbList_ = function () {
      var e = this;
      return Object(y.a)(function (t, n) {
        e.getDbList().then(function (r) {
          r.indexOf(e.dbName) < 0 ? (r.push(e.dbName), e.setDbList(r).then(t).catch(n)) : t();
        }).catch(n);
      });
    }, t.prototype.setPrimaryKey_ = function () {
      var e = this;
      this.activeDb.tables.forEach(function (t, n) {
        t.columns.every(function (t) {
          return e.activeDb.tables[n].primaryKey = t.primaryKey ? t.name : "", !t.primaryKey;
        });
      });
    }, t;
  }(_.a),
      g = n(25),
      v = n(28),
      m = n(24),
      O = n(27),
      D = n(26),
      x = n(35),
      w = n(1),
      E = n(8),
      k = function () {
    function e(e) {
      this.columns = [], this.requireDelete = !1, this.requireCreation = !1, this.name = e.name, this.version = e.version, this.columns = e.columns, this.setPrimaryKey_();
    }

    return e.prototype.createMetaData = function (e) {
      var t = this;
      return Object(y.a)(function (n) {
        t.callback_ = n, t.setRequireDelete_(e), t.setDbVersion_(e);
      });
    }, e.prototype.setPrimaryKey_ = function () {
      var e = this;
      this.columns.every(function (t) {
        return e.primaryKey = t.primaryKey ? t.name : "", !t.primaryKey;
      });
    }, e.prototype.setRequireDelete_ = function (e) {
      var t = this;
      u.a.get("JsStore_" + e + "_" + this.name + "_Version").then(function (e) {
        null == e ? t.requireCreation = !0 : e < t.version && (t.requireDelete = !0);
      });
    }, e.prototype.setDbVersion_ = function (e) {
      var t = this;
      f.a.activeDbVersion = f.a.activeDbVersion > this.version ? f.a.activeDbVersion : this.version, u.a.set("JsStore_" + e + "_Db_Version", f.a.activeDbVersion), u.a.set("JsStore_" + e + "_" + this.name + "_Version", f.a.activeDbVersion).then(function () {
        t.version = f.a.activeDbVersion, t.callback_(t);
      });
    }, e;
  }(),
      S = n(13),
      q = function () {
    function e(e) {
      this.tables = [], this.dbName = e.name, this.tables = e.tables;
    }

    return e.prototype.createMetaData = function () {
      var e = this;
      return Object(S.a)(this.tables.map(function (t) {
        return new k(t).createMetaData(e.dbName);
      }));
    }, e;
  }(),
      C = function () {
    return function (e) {
      this.name = e.name, this.autoIncrement = null != e.autoIncrement && e.autoIncrement, this.primaryKey = null != e.primaryKey && e.primaryKey, this.unique = null != e.unique && e.unique, this.notNull = null != e.notNull && e.notNull, this.dataType = null != e.dataType ? e.dataType : e.autoIncrement ? "number" : null, this.default = e.default, this.multiEntry = null != e.multiEntry && e.multiEntry, this.enableSearch = null == e.enableSearch || e.enableSearch, this.keyPath = e.keyPath;
    };
  }(),
      j = function () {
    return function (e) {
      for (var t in this.columns = [], this.name = e.name, this.version = null == e.version ? 1 : e.version, e.columns) {
        var n = {
          name: t
        };

        for (var r in e.columns[t]) {
          var o = e.columns[t][r];

          switch (r) {
            case "primaryKey":
            case "autoIncrement":
            case "unique":
            case "dataType":
            case "enableSearch":
            case "keyPath":
            case "multiEntry":
            case "default":
            case "notNull":
              n[r] = o;
          }
        }

        this.columns.push(new C(n));
      }
    };
  }(),
      T = function () {
    return function (e) {
      var t = this;
      this.tables = [], this.name = e.name, e.tables.forEach(function (e) {
        t.tables.push(new j(e));
      });
    };
  }(),
      I = n(32);

  n.d(t, "a", function () {
    return P;
  });

  var P = function () {
    function e(e) {
      this.onQueryFinished = e, o.a.autoIncrementValues = {};
    }

    return e.prototype.checkConnectionAndExecuteLogic = function (e) {
      var t = this;

      switch (w.a.log("request executing:" + e.name), e.name) {
        case a.a.InitDb:
        case a.a.IsDbExist:
        case a.a.GetDbVersion:
        case a.a.GetDbList:
        case a.a.GetDbSchema:
        case a.a.Get:
        case a.a.Set:
        case a.a.ChangeLogStatus:
        case a.a.Terminate:
        case a.a.OpenDb:
        case a.a.InitKeyStore:
        case a.a.CloseDb:
          var n = this.checkForIdbSupport_();
          null == n ? this.executeLogic_(e) : this.returnResult_({
            errorDetails: n,
            errorOccured: !0
          });
          break;

        default:
          switch (this.dbStatus_.conStatus) {
            case a.b.Connected:
              this.executeLogic_(e);
              break;

            case a.b.Closed:
              !0 === this.isDbDeletedByBrowser_ ? this.initDb_(null, function () {
                t.isDbDeletedByBrowser_ = !1, t.checkConnectionAndExecuteLogic(e);
              }, e.onError) : this.initDb_(this.activeDb_, function () {
                t.checkConnectionAndExecuteLogic(e);
              }, e.onError);
          }

      }
    }, e.prototype.changeLogStatus_ = function (e, t, n) {
      E.a.isLogEnabled = e, t();
    }, e.prototype.returnResult_ = function (e) {
      !0 === E.a.isRuningInWorker ? self.postMessage(e) : this.onQueryFinished(e);
    }, e.prototype.executeLogic_ = function (t) {
      var n = this,
          r = function r(e) {
        n.returnResult_({
          returnedValue: e
        });
      },
          o = function o(e) {
        n.returnResult_({
          errorDetails: e,
          errorOccured: !0
        });
      };

      switch (e.isTransactionQuery = t.name === a.a.Transaction, t.name) {
        case a.a.InitDb:
          !0 === this.isDbDeletedByBrowser_ ? this.initDb_(null, function () {
            n.isDbDeletedByBrowser_ = !1, r();
          }, o) : this.initDb_(t.query, r, o);
          break;

        case a.a.OpenDb:
          this.openDb_(t.query, r, o);
          break;

        case a.a.Select:
          new g.a(t.query, r, o).execute();
          break;

        case a.a.Insert:
          new m.a(t.query, r, o).execute();
          break;

        case a.a.Update:
          new D.a(t.query, r, o).execute();
          break;

        case a.a.Remove:
          new O.a(t.query, r, o).execute();
          break;

        case a.a.IsDbExist:
          this.isDbExist_(t.query, r, o);
          break;

        case a.a.GetDbVersion:
          this.getDbVersion_(t.query).then(r).catch(o);
          break;

        case a.a.GetDbList:
          this.getDbList_().then(r).catch(o);
          break;

        case a.a.GetDbSchema:
          this.getDbSchema_(t.query).then(r).catch(o);
          break;

        case a.a.Clear:
          new s(t.query, r, o).execute();
          break;

        case a.a.DropDb:
          this.dropDb_(r, o);
          break;

        case a.a.Count:
          new v.a(t.query, r, o).execute();
          break;

        case a.a.BulkInsert:
          new l(t.query, r, o).execute();
          break;

        case a.a.Get:
          this.get_(t.query).then(r).catch(o);
          break;

        case a.a.Set:
          this.set_(t.query).then(r).catch(o);
          break;

        case a.a.ChangeLogStatus:
          this.changeLogStatus_(t.query, r, o);
          break;

        case a.a.Transaction:
          new x.a(t.query, r, o).execute();
          break;

        case a.a.CloseDb:
        case a.a.Terminate:
          this.terminate_(r, o);
          break;

        case a.a.InitKeyStore:
          this.initKeyStore_(r);
          break;

        default:
          0;
      }
    }, e.prototype.openDb_ = function (e, t, n) {
      var r = this;
      null != this.activeDb_ && this.activeDb_.name === e ? this.processCreateDb(this.activeDb_).then(t).catch(n) : this.getDbSchema_(e).then(function (o) {
        null != o ? r.processCreateDb(o).then(t).catch(n) : n(new w.a(a.d.DbNotExist, {
          dbName: e
        }).get());
      }).catch(n);
    }, e.prototype.initKeyStore_ = function (e) {
      u.a.init().then(e()).catch(function () {
        f.a.dbStatus = {
          conStatus: a.b.UnableToStart,
          lastError: a.d.IndexedDbNotSupported
        };
      });
    }, e.prototype.getDbSchema_ = function (e) {
      return f.a.getDbSchema(e);
    }, e.prototype.terminate_ = function (e, t) {
      var n = this;
      u.a.close().then(function () {
        n.closeDb_(), e();
      });
    }, Object.defineProperty(e.prototype, "isDbDeletedByBrowser_", {
      get: function get() {
        return f.a.isDbDeletedByBrowser;
      },
      set: function set(e) {
        f.a.isDbDeletedByBrowser = e;
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.getDbList_ = function () {
      return f.a.getDbList();
    }, Object.defineProperty(e.prototype, "activeDb_", {
      get: function get() {
        return f.a.activeDb;
      },
      set: function set(e) {
        f.a.activeDb = e;
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.closeDb_ = function () {
      f.a.dbStatus.conStatus === a.b.Connected && (f.a.dbStatus.conStatus = a.b.ClosedByJsStore, f.a.dbConnection.close());
    }, e.prototype.dropDb_ = function (e, t) {
      this.closeDb_(), new p.a(e, t).deleteDb();
    }, e.prototype.processCreateDb = function (e) {
      var t = this;
      return Object(y.a)(function (n, r) {
        new q(e).createMetaData().then(function (o) {
          t.activeDb_ = e, new b(function (r) {
            t.activeDb_ = e, u.a.set("JsStore_" + e.name + "_Schema", e), n(r);
          }, r).execute(o);
        });
      });
    }, e.prototype.initDb_ = function (e, t, n) {
      var r = this;
      null == e ? this.processCreateDb(this.activeDb_) : (this.closeDb_(), this.getDbVersion_(e.name).then(function (o) {
        r.activeDbVersion_ = o || 1, r.processCreateDb(new T(e)).then(t).catch(n);
      }).catch(n));
    }, Object.defineProperty(e.prototype, "activeDbVersion_", {
      get: function get() {
        return f.a.activeDbVersion;
      },
      set: function set(e) {
        f.a.activeDbVersion = e;
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.getDbVersion_ = function (e) {
      return f.a.getDbVersion(e);
    }, Object.defineProperty(e.prototype, "dbStatus_", {
      get: function get() {
        return f.a.dbStatus;
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.checkForIdbSupport_ = function () {
      if (this.dbStatus_.conStatus === a.b.UnableToStart) {
        var e = {
          type: this.dbStatus_.lastError
        };

        switch (e.type) {
          case a.d.IndexedDbNotSupported:
            e.message = "Browser does not support IndexedDB";
            break;

          default:
            e.message = "unknown error occured";
        }

        return e;
      }
    }, e.prototype.isDbExist_ = function (e, t, n) {
      Object(I.a)(e) === a.c.String ? this.getDbVersion_(e).then(function (e) {
        t(Boolean(e));
      }) : this.getDbVersion_(e.dbName).then(function (n) {
        t(e.table.version <= n);
      });
    }, e.prototype.get_ = function (e) {
      return u.a.get(e);
    }, e.prototype.set_ = function (e) {
      return u.a.set(e.key, e.value);
    }, e.isTransactionQuery = !1, e;
  }();
},, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return u;
  });

  var _r3,
      o = n(6),
      i = (_r3 = function r(e, t) {
    return (_r3 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    })(e, t);
  }, function (e, t) {
    function n() {
      this.constructor = e;
    }

    _r3(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
  }),
      u = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.results = [], t;
    }

    return i(t, e), t.prototype.onQueryFinished = function () {}, t;
  }(o.a);
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return r;
  });

  var r = function r(e) {
    return new Promise(e);
  };
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return r;
  });

  var r = function r(e) {
    return Promise.all(e);
  };
},,, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return i;
  });

  var r = n(2),
      o = n(0),
      i = function () {
    function e() {}

    return Object.defineProperty(e.prototype, "dbName", {
      get: function get() {
        return r.a.activeDb.name;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "dbStatus", {
      get: function get() {
        return r.a.dbStatus;
      },
      set: function set(e) {
        r.a.dbStatus = e;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "dbConnection", {
      get: function get() {
        return r.a.dbConnection;
      },
      set: function set(e) {
        r.a.dbConnection = e;
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.updateDbStatus = function (e, t) {
      r.a.updateDbStatus(e, t);
    }, e.prototype.onDbDroppedByBrowser = function (e) {
      r.a.callDbDroppedByBrowser(e);
    }, Object.defineProperty(e.prototype, "dbVersion", {
      get: function get() {
        return parseInt(r.a.activeDbVersion);
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "activeDb", {
      get: function get() {
        return r.a.activeDb;
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.getDbList = function () {
      return r.a.getDbList();
    }, e.prototype.setDbList = function (e) {
      return r.a.setDbList(e);
    }, e.prototype.onDbClose = function (e) {
      this.onDbDroppedByBrowser(), this.updateDbStatus(o.b.Closed, o.d.ConnectionClosed);
    }, e.prototype.onDbVersionChange = function (e) {
      null === e.newVersion && (e.target.close(), this.onDbDroppedByBrowser(!0), this.updateDbStatus(o.b.Closed, o.d.ConnectionClosed));
    }, e.prototype.onDbConError = function (e) {
      r.a.dbStatus.lastError = "Error occured in connection :" + e.target.result;
    }, e;
  }();
},,, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return h;
  });

  var _r4,
      o = n(7),
      i = n(0),
      u = n(1),
      c = n(16),
      s = n(12),
      a = (_r4 = function r(e, t) {
    return (_r4 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    })(e, t);
  }, function (e, t) {
    function n() {
      this.constructor = e;
    }

    _r4(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
  }),
      h = function (e) {
    function t(t, n) {
      var r = e.call(this) || this;
      return r.onSuccess_ = t, r.onError_ = n, r;
    }

    return a(t, e), t.prototype.deleteMetaData = function () {
      var e = this;
      return Object(s.a)(function (t, n) {
        o.a.remove("JsStore_" + e.dbName + "_Db_Version"), e.activeDb.tables.forEach(function (t) {
          o.a.remove("JsStore_" + e.dbName + "_" + t.name + "_Version"), t.columns.forEach(function (n) {
            n.autoIncrement && o.a.remove("JsStore_" + e.dbName + "_" + t.name + "_" + n.name + "_Value");
          });
        }), e.getDbList().then(function (r) {
          r.splice(r.indexOf(e.dbName), 1), e.setDbList(r).then(function () {
            o.a.remove("JsStore_" + e.dbName + "_Schema").then(t).catch(n);
          });
        });
      });
    }, t.prototype.deleteDb = function () {
      var e = this;
      setTimeout(function () {
        var t = indexedDB.deleteDatabase(e.dbName);
        t.onblocked = function () {
          null != e.onError_ && e.onError_(new u.a(i.d.DbBlocked).get());
        }, t.onerror = function (t) {
          null != e.onError_ && e.onError_(event.target.error);
        }, t.onsuccess = function () {
          e.deleteMetaData().then(function () {
            e.onSuccess_(), e.dbStatus.conStatus = i.b.Closed;
          }).catch(e.onError_);
        };
      }, 100);
    }, t;
  }(c.a);
},,, function (e, t, n) {
  "use strict";

  n.r(t);

  var r = n(9),
      o = n(8),
      i = n(2),
      u = n(0),
      c = function c() {
    void 0 === self.alert && "undefined" == typeof ServiceWorkerGlobalScope && (o.a.isRuningInWorker = !0, self.onmessage = function (e) {
      new r.a().checkConnectionAndExecuteLogic(e.data);
    });
  },
      s = function s() {
    i.a.dbStatus = {
      conStatus: u.b.UnableToStart,
      lastError: u.d.IndexedDbNotSupported
    };
  };

  !function () {
    try {
      indexedDB || (indexedDB = self.mozIndexedDB || self.webkitIndexedDB || self.msIndexedDB), indexedDB ? (IDBTransaction = IDBTransaction || self.webkitIDBTransaction || self.msIDBTransaction, self.IDBKeyRange = self.IDBKeyRange || self.webkitIDBKeyRange || self.msIDBKeyRange) : s();
    } catch (e) {
      s();
    }
  }(), c();
  var a = n(7);
  n.d(t, "QueryExecutor", function () {
    return r.a;
  }), n.d(t, "initialize", function () {
    return c;
  }), n.d(t, "Config", function () {
    return o.a;
  }), n.d(t, "KeyStore", function () {
    return a.a;
  });
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return a;
  }), n.d(t, "b", function () {
    return h;
  });

  var r = n(2),
      o = n(4),
      i = n(7),
      u = n(12),
      c = n(13),
      s = n(9),
      a = function a(e) {
    var t = e.columns.filter(function (e) {
      return e.autoIncrement;
    });
    return Object(u.a)(function (n, o) {
      Object(c.a)(t.map(function (t) {
        var n = "JsStore_" + r.a.activeDb.name + "_" + e.name + "_" + t.name + "_Value";
        return i.a.get(n);
      })).then(function (e) {
        for (var r = {}, o = 0; o < t.length; o++) {
          r[t[o].name] = e[o];
        }

        n(r);
      }).catch(o);
    });
  },
      h = function h(e, t) {
    var n = Object.keys(t);
    return Object(c.a)(n.map(function (n) {
      var u = "JsStore_" + r.a.activeDb.name + "_" + e.name + "_" + n + "_Value",
          c = t[n];
      return !0 === s.a.isTransactionQuery && (o.a.autoIncrementValues[e.name][n] = c), i.a.set(u, c);
    }));
  };
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return h;
  });

  var _r5,
      o = n(6),
      i = n(13),
      u = n(12),
      c = n(4),
      s = n(0),
      a = (_r5 = function r(e, t) {
    return (_r5 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    })(e, t);
  }, function (e, t) {
    function n() {
      this.constructor = e;
    }

    _r5(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
  }),
      h = function (e) {
    function t(t, n, r) {
      var o = e.call(this) || this;
      return o.valuesAffected_ = [], o.onTransactionCompleted_ = function () {
        null == o.error ? o.onSuccess(!0 === o.query.return ? o.valuesAffected_ : o.rowAffected) : o.onError(o.error);
      }, o.onError = r, o.query = t, o.onSuccess = n, o.tableName = o.query.into, o;
    }

    return a(t, e), t.prototype.execute = function () {
      var e = this,
          t = new c.a(s.a.Insert, this.query);
      t.checkAndModify().then(function () {
        e.query = t.query, e.insertData_(e.query.values);
      }).catch(this.onError);
    }, t.prototype.onQueryFinished_ = function () {
      !0 === this.isTransaction && this.onTransactionCompleted_();
    }, t.prototype.insertData_ = function (e) {
      var t,
          n,
          r = this,
          o = !0 === this.query.upsert ? "put" : "add";
      n = !0 === this.query.return ? function (e) {
        r.valuesAffected_.push(e);
      } : function (e) {
        ++r.rowAffected;
      }, this.createTransaction([this.query.into], this.onTransactionCompleted_), t = this.transaction.objectStore(this.query.into), Object(i.a)(e.map(function (e) {
        return Object(u.a)(function (r, i) {
          var u = t[o](e);
          u.onerror = i, u.onsuccess = function () {
            n(e), r();
          };
        });
      })).then(function () {
        r.onQueryFinished_();
      }).catch(function (e) {
        r.transaction.abort(), r.onErrorOccured(e);
      });
    }, t;
  }(o.a);
}, function (e, t, n) {
  "use strict";

  var _r6,
      o,
      i,
      u,
      c,
      s,
      a,
      h,
      l,
      f,
      p,
      _ = n(0),
      y = n(11),
      d = (_r6 = function r(e, t) {
    return (_r6 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    })(e, t);
  }, function (e, t) {
    function n() {
      this.constructor = e;
    }

    _r6(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
  }),
      b = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.sorted = !1, t.isSubQuery = !1, t.isOrderWithLimit = !1, t;
    }

    return d(t, e), t.prototype.removeDuplicates = function () {
      var e = this.results;
      this.results = void 0;
      var t = this.getPrimaryKey(this.query.from),
          n = {};

      for (var r in e) {
        n[e[r][t]] = e[r];
      }

      for (var r in e = [], n) {
        e.push(n[r]);
      }

      this.results = e;
    }, t;
  }(y.a),
      g = n(1),
      v = function () {
    var _e5 = function e(t, n) {
      return (_e5 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e5(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      m = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return v(t, e), t.prototype.executeWhereUndefinedLogic = function () {
      if (this.query.order && this.query.order.by && !1 !== this.query.order.idbSorting) {
        if (!this.objectStore.indexNames.contains(this.query.order.by)) {
          var e = new g.a(_.d.ColumnNotExist, {
            column: this.query.order.by,
            isOrder: !0
          });
          return void this.onErrorOccured(e, !0);
        }

        var t = this.query.order.type && "desc" === this.query.order.type.toLowerCase() ? "prev" : "next";
        this.sorted = !0, this.cursorOpenRequest = this.objectStore.index(this.query.order.by).openCursor(null, t);
      } else this.cursorOpenRequest = this.objectStore.openCursor();

      this.cursorOpenRequest.onerror = this.onErrorOccured, !1 === this.isOrderWithLimit ? this.skipRecord && this.limitRecord ? this.executeSkipAndLimitForNoWhere_() : this.skipRecord ? this.executeSkipForNoWhere_() : this.limitRecord ? this.executeLimitForNotWhere_() : this.executeSimpleForNotWhere_() : this.skipRecord ? this.executeSkipForNoWhere_() : this.executeSimpleForNotWhere_();
    }, t.prototype.executeSkipAndLimitForNoWhere_ = function () {
      var e,
          t = this,
          n = !1;

      this.cursorOpenRequest.onsuccess = function (r) {
        (e = r.target.result) ? n && t.results.length !== t.limitRecord ? (t.results.push(e.value), e.continue()) : (n = !0, e.advance(t.skipRecord)) : t.onQueryFinished();
      };
    }, t.prototype.executeSkipForNoWhere_ = function () {
      var e,
          t = this,
          n = !1;

      this.cursorOpenRequest.onsuccess = function (r) {
        (e = r.target.result) ? n ? (t.results.push(e.value), e.continue()) : (n = !0, e.advance(t.skipRecord)) : t.onQueryFinished();
      };
    }, t.prototype.executeSimpleForNotWhere_ = function () {
      var e;

      this.cursorOpenRequest.onsuccess = function (t) {
        (e = t.target.result) ? (this.results.push(e.value), e.continue()) : this.onQueryFinished();
      }.bind(this);
    }, t.prototype.executeLimitForNotWhere_ = function () {
      var e,
          t = this;

      this.cursorOpenRequest.onsuccess = function (n) {
        (e = n.target.result) && t.results.length !== t.limitRecord ? (t.results.push(e.value), e.continue()) : t.onQueryFinished();
      };
    }, t;
  }(b),
      O = n(12),
      D = n(13),
      x = function () {
    var _e6 = function e(t, n) {
      return (_e6 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e6(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      w = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return x(t, e), t.prototype.executeInLogic = function (e, t) {
      var n = this;
      u = this.skipRecord, i = function i(e) {
        0 === u ? n.results.push(e) : --u;
      }, o = function o() {
        return n.whereCheckerInstance.check(c.value);
      }, this.skipRecord && this.limitRecord ? this.executeSkipAndLimitForIn_(e, t) : this.skipRecord ? this.executeSkipForIn_(e, t) : this.limitRecord ? this.executeLimitForIn_(e, t) : this.executeSimpleForIn_(e, t);
    }, t.prototype.executeSkipAndLimitForIn_ = function (e, t) {
      var n,
          r = this,
          u = this.objectStore.index(e);
      Object(D.a)(t.map(function (e) {
        return t = e, Object(O.a)(function (e, s) {
          (n = u.openCursor(r.getKeyRange(t))).onsuccess = function (t) {
            c = t.target.result, r.results.length !== r.limitRecord && c ? (o() && i(c.value), c.continue()) : e();
          }, n.onerror = s;
        });
        var t;
      })).then(function () {
        r.onQueryFinished();
      }).catch(function (e) {
        r.onErrorOccured(e);
      });
    }, t.prototype.executeSkipForIn_ = function (e, t) {
      var n,
          r = this,
          u = this.objectStore.index(e);
      Object(D.a)(t.map(function (e) {
        return t = e, Object(O.a)(function (e, s) {
          (n = u.openCursor(r.getKeyRange(t))).onsuccess = function (t) {
            (c = t.target.result) ? (o() && i(c.value), c.continue()) : e();
          }, n.onerror = s;
        });
        var t;
      })).then(function () {
        r.onQueryFinished();
      }).catch(function (e) {
        r.onErrorOccured(e);
      });
    }, t.prototype.executeLimitForIn_ = function (e, t) {
      var n,
          r = this,
          i = this.objectStore.index(e);
      Object(D.a)(t.map(function (e) {
        return t = e, Object(O.a)(function (e, u) {
          (n = i.openCursor(r.getKeyRange(t))).onsuccess = function (t) {
            (c = t.target.result) && r.results.length !== r.limitRecord ? (o() && r.results.push(c.value), c.continue()) : e();
          }, n.onerror = u;
        });
        var t;
      })).then(function () {
        r.onQueryFinished();
      }).catch(function (e) {
        r.onErrorOccured(e);
      });
    }, t.prototype.executeSimpleForIn_ = function (e, t) {
      var n,
          r = this,
          i = this.objectStore.index(e);
      Object(D.a)(t.map(function (e) {
        return t = e, Object(O.a)(function (e, u) {
          (n = i.openCursor(r.getKeyRange(t))).onsuccess = function (t) {
            (c = t.target.result) ? (o() && r.results.push(c.value), c.continue()) : e();
          }, n.onerror = u;
        });
        var t;
      })).then(function () {
        r.onQueryFinished();
      }).catch(function (e) {
        r.onErrorOccured(e);
      });
    }, t;
  }(m),
      E = function () {
    var _e7 = function e(t, n) {
      return (_e7 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e7(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      k = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return E(t, e), t.prototype.executeRegexLogic = function (e, t) {
      var n = this;
      h = this.skipRecord, this.regexExpression = t, a = function a(e) {
        0 === h ? n.results.push(e) : --h;
      }, s = function s() {
        return n.regexTest(l.key) && n.whereCheckerInstance.check(l.value);
      }, this.cursorOpenRequest = this.objectStore.index(e).openCursor(), this.cursorOpenRequest.onerror = this.onErrorOccured, this.skipRecord && this.limitRecord ? this.executeSkipAndLimitForRegex_() : this.skipRecord ? this.executeSkipForRegex_() : this.limitRecord ? this.executeLimitForRegex_() : this.executeSimpleForRegex_();
    }, t.prototype.executeSkipAndLimitForRegex_ = function () {
      var e = this;

      this.cursorOpenRequest.onsuccess = function (t) {
        l = t.target.result, e.results.length !== e.limitRecord && l ? (s() && a(l.value), l.continue()) : e.onQueryFinished();
      };
    }, t.prototype.executeSkipForRegex_ = function () {
      var e = this;

      this.cursorOpenRequest.onsuccess = function (t) {
        (l = t.target.result) ? (s() && a(l.value), l.continue()) : e.onQueryFinished();
      };
    }, t.prototype.executeLimitForRegex_ = function () {
      var e = this;

      this.cursorOpenRequest.onsuccess = function (t) {
        l = t.target.result, e.results.length !== e.limitRecord && l ? (s() && e.results.push(l.value), l.continue()) : e.onQueryFinished();
      };
    }, t.prototype.executeSimpleForRegex_ = function () {
      var e = this;

      this.cursorOpenRequest.onsuccess = function (t) {
        (l = t.target.result) ? (s() && e.results.push(l.value), l.continue()) : e.onQueryFinished();
      };
    }, t;
  }(w),
      S = function () {
    var _e8 = function e(t, n) {
      return (_e8 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e8(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      q = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return S(t, e), t.prototype.executeWhereLogic = function (e, t, n, r) {
      var o = this;
      f = function f() {
        return o.whereCheckerInstance.check(p.value);
      }, t = n ? t[n] : t, this.cursorOpenRequest = this.objectStore.index(e).openCursor(this.getKeyRange(t, n), r), this.cursorOpenRequest.onerror = this.onErrorOccured, !1 === this.isOrderWithLimit ? this.skipRecord && this.limitRecord ? this.executeSkipAndLimitForWhere_() : this.skipRecord ? this.executeSkipForWhere_() : this.limitRecord ? this.executeLimitForWhere_() : this.executeSimpleForWhere_() : this.skipRecord ? this.executeSkipForWhere_() : this.executeSimpleForWhere_();
    }, t.prototype.executeSkipAndLimitForWhere_ = function () {
      var e = this,
          t = !1;

      this.cursorOpenRequest.onsuccess = function (n) {
        (p = n.target.result) ? t && e.results.length !== e.limitRecord ? (f() && e.results.push(p.value), p.continue()) : (t = !0, p.advance(e.skipRecord)) : e.onQueryFinished();
      };
    }, t.prototype.executeSkipForWhere_ = function () {
      var e = this,
          t = !1;

      this.cursorOpenRequest.onsuccess = function (n) {
        (p = n.target.result) ? t ? (f() && e.results.push(p.value), p.continue()) : (t = !0, p.advance(e.skipRecord)) : e.onQueryFinished();
      };
    }, t.prototype.executeLimitForWhere_ = function () {
      var e = this;

      this.cursorOpenRequest.onsuccess = function (t) {
        (p = t.target.result) && e.results.length !== e.limitRecord && f() ? (e.results.push(p.value), p.continue()) : e.onQueryFinished();
      };
    }, t.prototype.executeSimpleForWhere_ = function () {
      var e = this;

      this.cursorOpenRequest.onsuccess = function (t) {
        (p = t.target.result) ? (f() && e.results.push(p.value), p.continue()) : e.onQueryFinished();
      };
    }, t;
  }(k),
      C = n(32),
      j = function () {
    var _e9 = function e(t, n) {
      return (_e9 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e9(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      T = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return j(t, e), t.prototype.processGroupBy = function () {
      var e = this.query.groupBy,
          t = this.results,
          n = {};
      if (this.results = this.query.groupBy = void 0, Object(C.a)(e) === _.c.String) for (var r in t) {
        n[t[r][e]] = t[r];
      } else {
        var o = void 0;

        for (var r in t) {
          for (var i in o = "", e) {
            o += t[r][e[i]];
          }

          n[o] = t[r];
        }
      }

      for (var r in t = [], n) {
        t.push(n[r]);
      }

      this.results = t;
    }, t.prototype.executeAggregateGroupBy = function () {
      var e = this.query.groupBy,
          t = this.results;
      this.results = void 0;

      var n,
          r,
          o,
          i,
          u = {},
          c = this.query.aggregate,
          s = function s() {
        var e = function e() {
          return o = (o = u[r]) ? o["count(" + i + ")"] : 0, o += t[n][i] ? 1 : 0;
        },
            s = function s() {
          return o = (o = u[r]) ? o["max(" + i + ")"] : 0, t[n][i] = t[n][i] ? t[n][i] : 0, o > t[n][i] ? o : t[n][i];
        },
            a = function a() {
          return o = (o = u[r]) ? o["min(" + i + ")"] : 1 / 0, t[n][i] = t[n][i] ? t[n][i] : 1 / 0, o < t[n][i] ? o : t[n][i];
        },
            h = function h() {
          return o = (o = u[r]) ? o["sum(" + i + ")"] : 0, o += t[n][i] ? t[n][i] : 0;
        },
            l = function l() {
          var e = (o = u[r]) ? o["sum(" + i + ")"] : 0;
          e += t[n][i] ? t[n][i] : 0, t[n]["sum(" + i + ")"] = e, o = o ? o["count(" + i + ")"] : 0, o += t[n][i] ? 1 : 0, t[n]["count(" + i + ")"] = o;
        };

        for (var f in c) {
          var p = c[f],
              y = Object(C.a)(p),
              d = void 0;

          switch (f) {
            case _.g.Count:
              d = e;
              break;

            case _.g.Max:
              d = s;
              break;

            case _.g.Min:
              d = a;
              break;

            case _.g.Sum:
              d = h;
              break;

            case _.g.Avg:
              d = l;
          }

          switch (y) {
            case _.c.String:
              i = p, t[n][f + "(" + i + ")"] = d();
              break;

            case _.c.Array:
              for (var b in p) {
                i = p[b], t[n][f + "(" + i + ")"] = d();
              }

          }
        }
      };

      if (Object(C.a)(e) === _.c.String) for (n in t) {
        r = t[n][e], s(), u[r] = t[n];
      } else for (n in t) {
        for (var a in r = "", e) {
          r += t[n][e[a]];
        }

        s(), u[r] = t[n];
      }

      for (var h in t = [], u) {
        t.push(u[h]);
      }

      if (c.avg) if (Object(C.a)(c.avg) === _.c.String) for (n in t) {
        var l = t[n]["sum(" + c.avg + ")"],
            f = t[n]["count(" + c.avg + ")"];
        t[n]["avg(" + c.avg + ")"] = l / f, c.count !== c.avg && delete t[n]["count(" + c.avg + ")"], c.sum !== c.avg && delete t[n]["sum(" + c.avg + ")"];
      } else {
        var p = Object(C.a)(c.count) === _.c.String,
            y = Object(C.a)(c.sum) === _.c.String;

        for (n in t) {
          for (var a in c.avg) {
            var d = c.avg[a],
                b = t[n]["sum(" + d + ")"],
                g = t[n]["count(" + d + ")"];
            t[n]["avg(" + d + ")"] = b / g, p && (c.count !== d ? delete t[n]["count(" + d + ")"] : -1 === c.count.indexOf(d) && delete t[n]["count(" + d + ")"]), y && (c.sum !== d ? delete t[n]["sum(" + d + ")"] : -1 === c.sum.indexOf(d) && delete t[n]["sum(" + d + ")"]);
          }
        }
      }
      this.results = t;
    }, t;
  }(q),
      I = function I(e) {
    return e.replace(/\s/g, "");
  },
      P = function () {
    var _e10 = function e(t, n) {
      return (_e10 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e10(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      L = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return P(t, e), t.prototype.getOrderColumnInfo_ = function (e) {
      var t;
      if (null == this.query.join) t = this.getColumnInfo(e, this.query.from);else {
        var n = I(e).split(".");
        e = n[1], t = this.getColumnInfo(e, n[0]);
      }
      return null == t && this.onErrorOccured(new g.a(_.d.ColumnNotExist, {
        column: e,
        isOrder: !0
      }), !0), t;
    }, t.prototype.compareAlphabetInDesc_ = function (e, t) {
      return t.localeCompare(e);
    }, t.prototype.compareAlphabetinAsc_ = function (e, t) {
      return e.localeCompare(t);
    }, t.prototype.compareNumberInDesc_ = function (e, t) {
      return t - e;
    }, t.prototype.compareNumberinAsc_ = function (e, t) {
      return e - t;
    }, t.prototype.compareDateInDesc_ = function (e, t) {
      return t.getTime() - e.getTime();
    }, t.prototype.compareDateInAsc_ = function (e, t) {
      return e.getTime() - t.getTime();
    }, t.prototype.getValueComparer_ = function (e, t) {
      var n;

      switch (e.dataType) {
        case _.c.String:
          n = "asc" === t.type ? this.compareAlphabetinAsc_ : this.compareAlphabetInDesc_;
          break;

        case _.c.Number:
          n = "asc" === t.type ? this.compareNumberinAsc_ : this.compareNumberInDesc_;
          break;

        case _.c.DateTime:
          n = "asc" === t.type ? this.compareDateInAsc_ : this.compareDateInDesc_;
      }

      return n;
    }, t.prototype.orderBy = function (e) {
      e.type = this.getOrderType(e.type);
      var t = e.by,
          n = this.getOrderColumnInfo_(t);

      if (null != n) {
        var r = this.getValueComparer_(n, e);
        t = n.name, this.results.sort(function (e, n) {
          return r(e[t], n[t]);
        });
      }
    }, t.prototype.getOrderType = function (e) {
      return null == e ? "asc" : e.toLowerCase();
    }, t.prototype.processOrderBy = function () {
      var e = this.query.order;

      if (e && this.results.length > 0 && !this.sorted) {
        var t = Object(C.a)(e);
        if (t === _.c.Object) this.orderBy(e);else if (t === _.c.Array) {
          this.orderBy(e[0]);

          for (var n = function n(t, _n) {
            if (null == r.error) {
              var o = e[t - 1].by,
                  i = e[t],
                  u = i.by,
                  c = r.getOrderColumnInfo_(u);

              if (null != c) {
                u = c.name, i.type = r.getOrderType(i.type);
                var s = r.getValueComparer_(c, i);
                r.results.sort(function (e, t) {
                  return e[o] === t[o] ? s(e[u], t[u]) : 0;
                });
              }
            }
          }, r = this, o = 1, i = e.length; o < i; o++) {
            n(o);
          }
        }
      }
    }, t.prototype.processAggregateQry = function () {
      var e,
          t = this.results,
          n = t.length,
          r = {};
      this.results = void 0;

      var o = function o() {
        var n = 0;

        for (var r in t) {
          n += t[r][e] ? 1 : 0;
        }

        return n;
      },
          i = function i() {
        var n = 0;

        for (var r in t) {
          n = n > t[r][e] ? n : t[r][e];
        }

        return n;
      },
          u = function u() {
        var n = 1 / 0,
            r = 1 / 0;

        for (var o in t) {
          n = n < (r = t[o][e] ? t[o][e] : 1 / 0) ? n : r;
        }

        return n;
      },
          c = function c() {
        var n = 0;

        for (var r in t) {
          n += t[r][e];
        }

        return n;
      },
          s = function s() {
        var r = 0;

        for (var o in t) {
          r += t[o][e];
        }

        return r / n;
      };

      for (var a in this.query.aggregate) {
        var h = this.query.aggregate[a],
            l = Object(C.a)(h),
            f = void 0;

        switch (a) {
          case "count":
            f = o;
            break;

          case "max":
            f = i;
            break;

          case "min":
            f = u;
            break;

          case "sum":
            f = c;
            break;

          case "avg":
            f = s;
        }

        switch (l) {
          case _.c.String:
            r[a + "(" + (e = h) + ")"] = f();
            break;

          case _.c.Array:
            for (var p in h) {
              r[a + "(" + (e = h[p]) + ")"] = f();
            }

        }
      }

      for (var a in r) {
        t[0][a] = r[a];
      }

      this.results = [t[0]];
    }, t;
  }(T),
      R = function () {
    var _e11 = function e(t, n) {
      return (_e11 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e11(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      _A = function A() {
    return (_A = Object.assign || function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) {
        for (var o in t = arguments[n]) {
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        }
      }

      return e;
    }).apply(this, arguments);
  },
      N = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.joinQueryStack_ = [], t.currentQueryStackIndex_ = 0, t.tablesFetched = [], t;
    }

    return R(t, e), t.prototype.executeJoinQuery = function () {
      var e = this,
          t = this.query;
      Object(C.a)(t.join) === _.c.Object ? this.joinQueryStack_ = [t.join] : this.joinQueryStack_ = t.join;
      var n = t.from;
      new M({
        from: n,
        where: t.where
      }, function (t) {
        t.forEach(function (t, n) {
          var r;
          e.results[n] = ((r = {})[e.currentQueryStackIndex_] = t, r);
        }), e.tablesFetched.push(n), e.startExecutingJoinLogic_();
      }, this.onError).execute();
    }, t.prototype.onJoinQueryFinished_ = function () {
      var e = this;

      if (null == this.error) {
        if (this.results.length > 0) {
          try {
            var t = function t(e, _t2) {
              if (e.as && null != _t2) for (var n in e.as) {
                _t2[e.as[n]] = _t2[n], delete _t2[n];
              }
              return _t2;
            },
                n = [],
                r = Object.keys(this.results[0]).length;

            this.results.forEach(function (o) {
              for (var i = o[0], u = 1; u < r; u++) {
                var c = e.joinQueryStack_[u - 1];
                i = _A({}, i, t(c, o[u]));
              }

              n.push(i);
            }), this.results = n, n = null, this.processOrderBy();
          } catch (e) {
            return void this.onError({
              message: e.message,
              type: _.d.InvalidJoinQuery
            });
          }

          this.query[_.g.Skip] && this.query[_.g.Limit] ? (this.results.splice(0, this.query[_.g.Skip]), this.results.splice(this.query[_.g.Limit] - 1, this.results.length)) : this.query[_.g.Skip] ? this.results.splice(0, this.query[_.g.Skip]) : this.query[_.g.Limit] && this.results.splice(this.query[_.g.Limit] - 1, this.results.length);
        }

        this.onSuccess(this.results);
      } else this.onError(this.error);
    }, t.prototype.startExecutingJoinLogic_ = function () {
      var e = this,
          t = this.joinQueryStack_[this.currentQueryStackIndex_];
      if (t) try {
        var n = this.getJoinTableInfo_(t.on);
        t.with === n.table1.table && (n = {
          table1: n.table2,
          table2: n.table1
        }), new M({
          from: t.with,
          where: t.where
        }, function (r) {
          e.jointables(t.type, n, r), e.tablesFetched.push(n.table2.table), ++e.currentQueryStackIndex_, e.startExecutingJoinLogic_();
        }, this.onError).execute();
      } catch (e) {
        this.onExceptionOccured(e);
      } else this.onJoinQueryFinished_();
    }, t.prototype.jointables = function (e, t, n) {
      var r,
          o,
          i,
          u = this,
          c = [],
          s = t.table1.column,
          a = t.table2.column,
          h = this.tablesFetched.indexOf(t.table1.table),
          l = this.currentQueryStackIndex_ + 1;

      switch (e) {
        case "left":
          i = 0, u.results.forEach(function (e) {
            r = [], o = 1 === l ? function (t) {
              e[h][s] === t[a] && r.push(t);
            } : function (t) {
              var n = e[h];
              null != n && n[s] === t[a] && r.push(t);
            }, n.forEach(o), 0 === r.length && (r = [null]), r.forEach(function (t) {
              c[i] = e, c[i++][l] = t;
            });
          });
          break;

        default:
          !function () {
            var e = 0;
            u.results.forEach(function (t) {
              n.forEach(function (n) {
                t[h][s] === n[a] && (c[e] = t, c[e++][l] = n);
              });
            });
          }();
      }

      this.results = c;
    }, t.prototype.getJoinTableInfo_ = function (e) {
      var t = (e = I(e)).split("="),
          n = t[0].split("."),
          r = t[1].split(".");
      return {
        table1: {
          table: n[0],
          column: n[1]
        },
        table2: {
          table: r[0],
          column: r[1]
        }
      };
    }, t.prototype.checkJoinQuery_ = function (e, t) {
      var n,
          r = e.table1,
          o = e.table2,
          i = this.getTable(r.table),
          u = this.getTable(o.table);
      t.with !== o.table && (n = new g.a(_.d.InvalidJoinQuery, "on value should contains value of with")), null == i.columns.find(function (e) {
        return e.name === r.column;
      }) ? n = new g.a(_.d.InvalidJoinQuery, "column " + r.column + " does not exist in table " + r.table) : null == u.columns.find(function (e) {
        return e.name === o.column;
      }) && (n = new g.a(_.d.InvalidJoinQuery, "column " + o.column + " does not exist in table " + o.table)), null == t.as && (t.as = {}), i.columns.every(function (e) {
        var i = u.columns.find(function (t) {
          return t.name === e.name && t.name !== r.column;
        });
        return null == i || null != t.as[i.name] || (n = new g.a(_.d.InvalidJoinQuery, "column " + e.name + " exist in both table " + r.table + " & " + o.table), !1);
      }), null != n && this.onErrorOccured(n, !0);
    }, t;
  }(L),
      B = n(4),
      Q = n(33),
      W = n(34);

  n.d(t, "a", function () {
    return M;
  });

  var F = function () {
    var _e12 = function e(t, n) {
      return (_e12 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e12(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      M = function (e) {
    function t(t, n, r) {
      var o = e.call(this) || this;
      return o.onTransactionCompleted_ = function () {
        if (null == o.error) {
          if (o.processOrderBy(), o.error) o.onError(o.error);else {
            if (!0 === o.isOrderWithLimit && (o.results = o.results.slice(0, o.query.limit)), o.query.distinct) {
              var e = [],
                  t = o.results[0];

              for (var n in t) {
                e.push(n);
              }

              var r = o.getPrimaryKey(o.query.from),
                  i = e.indexOf(r);
              e.splice(i, 1), o.query.groupBy = e.length > 0 ? e : null;
            }

            o.query.groupBy ? o.query.aggregate ? o.executeAggregateGroupBy() : o.processGroupBy() : o.query.aggregate && o.processAggregateQry(), o.onSuccess(o.results);
          }
        } else o.onError(o.error);
      }, o.onError = r, o.onSuccess = n, o.query = t, o.skipRecord = t.skip, o.limitRecord = t.limit, o.tableName = t.from, t.order && (Object(Q.a)(t.order) && (t.order.idbSorting = !1), null != t.limit && (o.isOrderWithLimit = !0)), o;
    }

    return F(t, e), t.prototype.execute = function () {
      var e = new B.a(_.a.Select, this.query);
      if (e.checkAndModify(), null == e.error) try {
        null == this.query.join ? null != this.query.where ? (this.initTransaction_(), Object(Q.a)(this.query.where) ? this.processWhereArrayQry() : this.processWhere_()) : (this.initTransaction_(), this.executeWhereUndefinedLogic()) : this.executeJoinQuery();
      } catch (e) {
        this.onExceptionOccured(e);
      } else this.onError(e.error);
    }, t.prototype.processWhereArrayQry = function () {
      var e = this;
      this.isArrayQry = !0;

      var t,
          n = this.query.where,
          r = this.getPrimaryKey(this.query.from),
          o = !0,
          i = [],
          u = function u() {
        if (t === _.g.And) {
          var u = function u() {
            var t = [];
            e.results.forEach(function (e) {
              var n;
              n = e[r], i.findIndex(function (e) {
                return e[r] === n;
              }) >= 0 && t.push(e);
            }), i = t, t = null;
          };

          i.length > 0 ? u() : !0 === o ? i = e.results : u();
        } else i.length > 0 ? (e.results = i.concat(e.results), e.removeDuplicates(), i = e.results) : i = e.results;

        o = !1, n.length > 0 ? (e.results = [], c()) : (e.results = i, !0 === e.isSubQuery && e.onTransactionCompleted_());
      },
          c = function c() {
        e.query.where = n.shift(), e.query.where[_.g.Or] && 1 === Object.keys(e.query.where).length ? (t = _.g.Or, e.query.where = e.query.where[_.g.Or], e.onWhereArrayQrySuccess = u) : (t = _.g.And, e.onWhereArrayQrySuccess = u), e.processWhere_();
      };

      c();
    }, t.prototype.onQueryFinished = function () {
      !0 === this.isOr ? this.orQuerySuccess_() : !0 === this.isArrayQry ? this.onWhereArrayQrySuccess() : !0 !== this.isTransaction && !0 !== this.isSubQuery || this.onTransactionCompleted_();
    }, t.prototype.initTransaction_ = function () {
      this.createTransaction([this.tableName], this.onTransactionCompleted_, _.e.ReadOnly), this.objectStore = this.transaction.objectStore(this.tableName);
    }, t.prototype.processWhere_ = function () {
      this.query.where.or && this.processOrLogic_(), this.goToWhereLogic();
    }, t.prototype.orQueryFinish_ = function () {
      this.isOr = !1, this.results = this.orInfo.results, this.orInfo = void 0, this.removeDuplicates(), this.onQueryFinished();
    }, t.prototype.orQuerySuccess_ = function () {
      if (this.orInfo.results = this.orInfo.results.concat(this.results), !this.query.limit || this.query.limit > this.orInfo.results.length) {
        this.results = [];
        var e = Object(W.a)(this.orInfo.orQuery);

        if (null != e) {
          var t = {};
          t[e] = this.orInfo.orQuery[e], delete this.orInfo.orQuery[e], this.query.where = t, this.goToWhereLogic();
        } else this.orQueryFinish_();
      } else this.orQueryFinish_();
    }, t.prototype.processOrLogic_ = function () {
      this.isOr = !0, this.orInfo = {
        orQuery: this.query.where.or,
        results: []
      }, delete this.query.where.or;
    }, t;
  }(N);
}, function (e, t, n) {
  "use strict";

  var _r7,
      o = n(6),
      i = n(0),
      u = n(32),
      c = (_r7 = function r(e, t) {
    return (_r7 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    })(e, t);
  }, function (e, t) {
    function n() {
      this.constructor = e;
    }

    _r7(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
  }),
      s = function s(e, t) {
    for (var n in e) {
      if (Object(u.a)(e[n]) !== i.c.Object) t[n] = e[n];else for (var r in e[n]) {
        switch (r) {
          case "+":
            t[n] += e[n][r];
            break;

          case "-":
            t[n] -= e[n][r];
            break;

          case "*":
            t[n] *= e[n][r];
            break;

          case "/":
            t[n] /= e[n][r];
            break;

          default:
            t[n] = e[n];
        }

        break;
      }
    }

    return t;
  },
      a = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.onTransactionCompleted_ = function () {
        t.error ? t.onError(t.error) : t.onSuccess(t.rowAffected);
      }, t;
    }

    return c(t, e), t.prototype.initTransaction = function () {
      this.createTransaction([this.query.in], this.onTransactionCompleted_), this.objectStore = this.transaction.objectStore(this.query.in);
    }, t.prototype.onQueryFinished = function () {
      !0 === this.isTransaction && this.onTransactionCompleted_();
    }, t;
  }(o.a),
      h = function () {
    var _e13 = function e(t, n) {
      return (_e13 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e13(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      l = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return h(t, e), t.prototype.executeWhereUndefinedLogic = function () {
      var e,
          t = this,
          n = this.objectStore.openCursor();
      n.onsuccess = function (n) {
        (e = n.target.result) ? (e.update(s(t.query.set, e.value)), ++t.rowAffected, e.continue()) : t.onQueryFinished();
      }, n.onerror = this.onErrorOccured;
    }, t;
  }(a),
      f = n(12),
      p = n(13),
      _ = function () {
    var _e14 = function e(t, n) {
      return (_e14 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e14(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      y = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return _(t, e), t.prototype.executeInLogic = function (e, t) {
      var n,
          r,
          o = this,
          i = this.objectStore.index(e);
      Object(p.a)(t.map(function (e) {
        return t = e, Object(f.a)(function (e, u) {
          (r = i.openCursor(o.getKeyRange(t))).onsuccess = function (t) {
            (n = t.target.result) ? (o.whereCheckerInstance.check(n.value) && (n.update(s(o.query.set, n.value)), ++o.rowAffected), n.continue()) : e();
          }, r.onerror = u;
        });
        var t;
      })).then(function () {
        o.onQueryFinished();
      }).catch(function (e) {
        o.onErrorOccured(e);
      });
    }, t;
  }(l),
      d = function () {
    var _e15 = function e(t, n) {
      return (_e15 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e15(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      b = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return d(t, e), t.prototype.executeRegexLogic = function (e, t) {
      var n,
          r = this;
      this.regexExpression = t;
      var o = this.objectStore.index(e).openCursor();
      o.onerror = this.onErrorOccured, o.onsuccess = function (e) {
        (n = e.target.result) ? (r.regexTest(n.key) && r.whereCheckerInstance.check(n.value) && (n.update(s(r.query.set, n.value)), ++r.rowAffected), n.continue()) : r.onQueryFinished();
      };
    }, t;
  }(y),
      g = function () {
    var _e16 = function e(t, n) {
      return (_e16 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e16(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      v = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return g(t, e), t.prototype.executeWhereLogic = function (e, t, n) {
      var r,
          o,
          i = this;
      t = n ? t[n] : t, (o = this.objectStore.index(e).openCursor(this.getKeyRange(t, n))).onsuccess = function (e) {
        (r = e.target.result) ? (i.whereCheckerInstance.check(r.value) && (r.update(s(i.query.set, r.value)), ++i.rowAffected), r.continue()) : i.onQueryFinished();
      }, o.onerror = this.onErrorOccured;
    }, t;
  }(b),
      m = n(25),
      O = n(4),
      D = n(33);

  n.d(t, "a", function () {
    return w;
  });

  var x = function () {
    var _e17 = function e(t, n) {
      return (_e17 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e17(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      w = function (e) {
    function t(t, n, r) {
      var o = e.call(this) || this;
      return o.onSuccess = n, o.onError = r, o.query = t, o.tableName = o.query.in, o;
    }

    return x(t, e), t.prototype.execute = function () {
      var e = new O.a(i.a.Update, this.query);
      if (e.checkAndModify(), null == e.error) try {
        this.initTransaction(), null != this.query.where ? this.query.where.or || Object(D.a)(this.query.where) ? this.executeComplexLogic_() : this.goToWhereLogic() : this.executeWhereUndefinedLogic();
      } catch (e) {
        this.onExceptionOccured(e);
      } else this.onError(e.error);
    }, t.prototype.executeComplexLogic_ = function () {
      var e = this,
          t = new m.a({
        from: this.query.in,
        where: this.query.where,
        ignoreCase: this.query.ignoreCase
      }, function (t) {
        var n,
            r,
            o = e.getPrimaryKey(e.query.in),
            u = [];
        t.forEach(function (e) {
          u.push(e[o]);
        }), t = null;
        var c = ((n = {})[o] = ((r = {})[i.g.In] = u, r), n);
        e.query.ignoreCase = null, e.query[i.g.Where] = c, e.initTransaction(), e.goToWhereLogic();
      }, this.onError);
      t.isSubQuery = !0, t.execute();
    }, t;
  }(v);
}, function (e, t, n) {
  "use strict";

  var _r8,
      o = n(11),
      i = (_r8 = function r(e, t) {
    return (_r8 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    })(e, t);
  }, function (e, t) {
    function n() {
      this.constructor = e;
    }

    _r8(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
  }),
      u = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return i(t, e), t.prototype.onQueryFinished = function () {}, t;
  }(o.a),
      c = function () {
    var _e18 = function e(t, n) {
      return (_e18 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e18(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      s = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return c(t, e), t.prototype.executeWhereUndefinedLogic = function () {
      var e,
          t = this,
          n = this.objectStore.openCursor();
      n.onsuccess = function (n) {
        (e = n.target.result) ? (e.delete(), ++t.rowAffected, e.continue()) : t.onQueryFinished();
      }, n.onerror = this.onErrorOccured;
    }, t;
  }(u),
      a = n(12),
      h = n(13),
      l = function () {
    var _e19 = function e(t, n) {
      return (_e19 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e19(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      f = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return l(t, e), t.prototype.executeInLogic = function (e, t) {
      var n,
          r,
          o = this;
      Object(h.a)(t.map(function (t) {
        return i = t, Object(a.a)(function (t, u) {
          (r = o.objectStore.index(e).openCursor(o.getKeyRange(i))).onsuccess = function (e) {
            (n = e.target.result) ? (o.whereCheckerInstance.check(n.value) && (n.delete(), ++o.rowAffected), n.continue()) : t();
          }, r.onerror = u;
        });
        var i;
      })).then(function () {
        o.onQueryFinished();
      }).catch(function (e) {
        o.onErrorOccured(e);
      });
    }, t;
  }(s),
      p = function () {
    var _e20 = function e(t, n) {
      return (_e20 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e20(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      _ = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return p(t, e), t.prototype.executeRegexLogic = function (e, t) {
      var n,
          r = this;
      this.regexExpression = t;
      var o = this.objectStore.index(e).openCursor();
      o.onerror = this.onErrorOccured, o.onsuccess = function (e) {
        (n = e.target.result) ? (r.regexTest(n.key) && r.whereCheckerInstance.check(n.value) && (n.delete(), ++r.rowAffected), n.continue()) : r.onQueryFinished();
      };
    }, t;
  }(f),
      y = function () {
    var _e21 = function e(t, n) {
      return (_e21 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e21(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      d = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return y(t, e), t.prototype.executeWhereLogic = function (e, t, n) {
      var r,
          o,
          i = this;
      t = n ? t[n] : t, (o = this.objectStore.index(e).openCursor(this.getKeyRange(t, n))).onsuccess = function (e) {
        (r = e.target.result) ? (i.whereCheckerInstance.check(r.value) && (r.delete(), ++i.rowAffected), r.continue()) : i.onQueryFinished();
      }, o.onerror = this.onErrorOccured;
    }, t;
  }(_),
      b = n(25),
      g = n(0),
      v = n(4),
      m = n(33),
      O = n(34);

  n.d(t, "a", function () {
    return x;
  });

  var D = function () {
    var _e22 = function e(t, n) {
      return (_e22 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e22(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      x = function (e) {
    function t(t, n, r) {
      var o = e.call(this) || this;
      return o.onTransactionCompleted_ = function () {
        null == o.error ? o.onSuccess(o.rowAffected) : o.onError(o.error);
      }, o.query = t, o.onSuccess = n, o.onError = r, o;
    }

    return D(t, e), t.prototype.execute = function () {
      var e = new v.a(g.a.Remove, this.query);
      if (e.checkAndModify(), null == e.error) try {
        this.initTransaction_(), null != this.query.where ? Object(m.a)(this.query.where) ? this.processWhereArrayQry() : this.processWhere_() : this.executeWhereUndefinedLogic();
      } catch (e) {
        this.onExceptionOccured(e);
      } else this.onError(e.error);
    }, t.prototype.processWhereArrayQry = function () {
      var e = this,
          t = new b.a(this.query, function (t) {
        var n,
            r,
            o = [],
            i = e.getPrimaryKey(e.query.from);
        t.forEach(function (e) {
          o.push(e[i]);
        }), t = null;
        var u = ((n = {})[i] = ((r = {})[g.g.In] = o, r), n);
        e.query.ignoreCase = null, e.query[g.g.Where] = u, e.processWhere_();
      }, this.onError);
      t.isSubQuery = !0, t.execute();
    }, t.prototype.processWhere_ = function () {
      this.query.where.or && this.processOrLogic(), this.goToWhereLogic();
    }, t.prototype.initTransaction_ = function () {
      this.createTransaction([this.query.from], this.onTransactionCompleted_), this.objectStore = this.transaction.objectStore(this.query.from);
    }, t.prototype.onQueryFinished = function () {
      !0 === this.isOr ? this.orQuerySuccess_() : !0 === this.isTransaction && this.onTransactionCompleted_();
    }, t.prototype.orQuerySuccess_ = function () {
      var e = Object(O.a)(this._orInfo.OrQuery);

      if (null != e) {
        var t = {};
        t[e] = this._orInfo.OrQuery[e], delete this._orInfo.OrQuery[e], this.query.where = t, this.goToWhereLogic();
      } else this.isOr = !0;
    }, t.prototype.processOrLogic = function () {
      this.isOr = !0, this._orInfo = {
        OrQuery: this.query.where.or
      }, delete this.query.where.or;
    }, t;
  }(d);
}, function (e, t, n) {
  "use strict";

  var _r9,
      o = n(11),
      i = (_r9 = function r(e, t) {
    return (_r9 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    })(e, t);
  }, function (e, t) {
    function n() {
      this.constructor = e;
    }

    _r9(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
  }),
      u = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.resultCount = 0, t.onTransactionCompleted_ = function () {
        null == t.error ? t.onSuccess(t.resultCount) : t.onError(t.error);
      }, t;
    }

    return i(t, e), t.prototype.onQueryFinished = function () {
      !0 === this.isTransaction && this.onTransactionCompleted_();
    }, t;
  }(o.a),
      c = function () {
    var _e23 = function e(t, n) {
      return (_e23 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e23(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      s = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return c(t, e), t.prototype.executeWhereUndefinedLogic = function () {
      var e = this;

      if (this.objectStore.count) {
        var t = this.objectStore.count();
        t.onsuccess = function () {
          e.resultCount = t.result, e.onQueryFinished();
        }, t.onerror = this.onErrorOccured;
      } else {
        var n,
            r = this.objectStore.openCursor();
        r.onsuccess = function (e) {
          (n = e.target.result) ? (++this._resultCount, n.continue()) : this.onQueryFinished();
        }.bind(this), r.onerror = this.onErrorOccured;
      }
    }, t;
  }(u),
      a = n(12),
      h = n(13),
      l = function () {
    var _e24 = function e(t, n) {
      return (_e24 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e24(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      f = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return l(t, e), t.prototype.executeInLogic = function (e, t) {
      var n,
          r,
          o = this,
          i = this.objectStore.index(e),
          u = function u(e) {
        return Object(a.a)(function (t, u) {
          (r = i.openCursor(o.getKeyRange(e))).onsuccess = function (e) {
            (n = e.target.result) ? (o.whereCheckerInstance.check(n.value) && ++o.resultCount, n.continue()) : t();
          }, r.onerror = u;
        });
      };

      this.objectStore.count && (u = function u(e) {
        return Object(a.a)(function (t, n) {
          (r = i.count(o.getKeyRange(e))).onsuccess = function (e) {
            o.resultCount += e.target.result, t();
          }, r.onerror = n;
        });
      }), Object(h.a)(t.map(function (e) {
        return u(e);
      })).then(function () {
        o.onQueryFinished();
      }).catch(function (e) {
        o.onErrorOccured(e);
      });
    }, t;
  }(s),
      p = function () {
    var _e25 = function e(t, n) {
      return (_e25 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e25(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      _ = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return p(t, e), t.prototype.executeRegexLogic = function (e, t) {
      var n,
          r = this;
      this.regexExpression = t;
      var o = this.objectStore.index(e).openCursor();
      o.onerror = this.onErrorOccured, o.onsuccess = function (e) {
        (n = e.target.result) ? (r.regexTest(n.key) && r.whereCheckerInstance.check(n.value) && ++r.resultCount, n.continue()) : r.onQueryFinished();
      };
    }, t;
  }(f),
      y = function () {
    var _e26 = function e(t, n) {
      return (_e26 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e26(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      d = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return y(t, e), t.prototype.executeWhereLogic = function (e, t, n) {
      var r,
          o,
          i = this;
      t = n ? t[n] : t, (this.objectStore.count ? function () {
        (r = i.objectStore.index(e).count(i.getKeyRange(t, n))).onsuccess = function () {
          i.resultCount = r.result, i.onQueryFinished();
        };
      } : function () {
        (r = i.objectStore.index(e).openCursor(i.getKeyRange(t, n))).onsuccess = function (e) {
          (o = e.target.result) ? (i.whereCheckerInstance.check(o.value) && ++i.resultCount, o.continue()) : i.onQueryFinished();
        };
      })(), r.onerror = this.onErrorOccured;
    }, t;
  }(_),
      b = n(25),
      g = n(0),
      v = n(4),
      m = n(33);

  n.d(t, "a", function () {
    return D;
  });

  var O = function () {
    var _e27 = function e(t, n) {
      return (_e27 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(t, n);
    };

    return function (t, n) {
      function r() {
        this.constructor = t;
      }

      _e27(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      D = function (e) {
    function t(t, n, r) {
      var o = e.call(this) || this;
      return o.onError = r, o.onSuccess = n, o.query = t, o;
    }

    return O(t, e), t.prototype.execute = function () {
      var e = this,
          t = new v.a(g.a.Count, this.query);
      if (t.checkAndModify(), null == t.error) try {
        var n = function n() {
          new b.a(e.query, function (t) {
            e.resultCount = t.length, e.onTransactionCompleted_();
          }, e.onError).execute();
        };

        null == this.query.join ? null != this.query.where ? this.query.where.or || Object(m.a)(this.query.where) ? n() : (this.initTransaction_(), this.goToWhereLogic()) : (this.initTransaction_(), this.executeWhereUndefinedLogic()) : n();
      } catch (e) {
        this.onExceptionOccured(e);
      } else this.onError(t.error);
    }, t.prototype.initTransaction_ = function () {
      this.createTransaction([this.query.from], this.onTransactionCompleted_, g.e.ReadOnly), this.objectStore = this.transaction.objectStore(this.query.from);
    }, t;
  }(d);
},,,, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return o;
  });

  var r = n(0),
      o = function o(e) {
    if (null == e) return r.c.Null;
    var t = typeof e;

    switch (t) {
      case "object":
        if (Array.isArray(e)) return r.c.Array;
        if (e.getDate && e.getTime) return r.c.DateTime;

      default:
        return t;
    }
  };
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return r;
  });

  var r = function r(e) {
    return Array.isArray(e);
  };
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return r;
  });

  var r = function r(e) {
    for (var t in e) {
      return t;
    }

    return null;
  };
}, function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.d(__webpack_exports__, "a", function () {
    return Instance;
  });

  var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6),
      _select_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25),
      _count_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28),
      _insert_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24),
      _remove_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27),
      _update_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26),
      _enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0),
      _query_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4),
      _log_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1),
      _helpers_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13),
      _helpers_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23),
      _helpers_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12),
      __extends = (_extendStatics = function extendStatics(e, t) {
    return (_extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    })(e, t);
  }, function (e, t) {
    function n() {
      this.constructor = e;
    }

    _extendStatics(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
  }),
      _extendStatics,
      Instance = function (_super) {
    function Instance(e, t, n) {
      var r = _super.call(this) || this;
      return r.requestQueue = [], r.isQueryExecuting = !1, r.isTxStarted_ = !1, r.query = e, r.onError = n, r.onSuccess = t, r.results = {}, r;
    }

    return __extends(Instance, _super), Instance.prototype.execute = function () {
      var e = this,
          t = this.getNotExistingTable_(this.query.tables);
      null == t ? Object(_helpers_index__WEBPACK_IMPORTED_MODULE_9__.a)(this.query.tables.map(function (t) {
        return Object(_helpers_index__WEBPACK_IMPORTED_MODULE_10__.a)(e.getTable(t));
      })).then(function (t) {
        t.forEach(function (t, n) {
          _query_helper__WEBPACK_IMPORTED_MODULE_7__.a.autoIncrementValues[e.query.tables[n]] = t;
        }), e.startExecution_();
      }).catch(this.onError) : this.onError(new _log_helper__WEBPACK_IMPORTED_MODULE_8__.a(_enums__WEBPACK_IMPORTED_MODULE_6__.d.TableNotExist, {
        tableName: t
      }).get());
    }, Instance.prototype.startExecution_ = function () {
      var _this = this,
          select = function select(e) {
        return _this.pushRequest_({
          name: _enums__WEBPACK_IMPORTED_MODULE_6__.a.Select,
          query: e
        });
      },
          insert = function insert(e) {
        return _this.pushRequest_({
          name: _enums__WEBPACK_IMPORTED_MODULE_6__.a.Insert,
          query: e
        });
      },
          update = function update(e) {
        return _this.pushRequest_({
          name: _enums__WEBPACK_IMPORTED_MODULE_6__.a.Update,
          query: e
        });
      },
          remove = function remove(e) {
        return _this.pushRequest_({
          name: _enums__WEBPACK_IMPORTED_MODULE_6__.a.Remove,
          query: e
        });
      },
          count = function count(e) {
        return _this.pushRequest_({
          name: _enums__WEBPACK_IMPORTED_MODULE_6__.a.Count,
          query: e
        });
      },
          setResult = function setResult(e, t) {
        _this.results[e] = t;
      },
          getResult = function getResult(e) {
        return _this.results[e];
      },
          abort = function abort(e) {
        _this.abortTransaction_(e);
      },
          start = function start() {
        _this.checkQueries_(_this.requestQueue).then(function (e) {
          _this.startTransaction_();
        }).catch(function (e) {
          _this.onError(e);
        });
      },
          txLogic = null;

      eval("txLogic =" + this.query.logic), txLogic.call(this, this.query.data);
    }, Instance.prototype.startTransaction_ = function () {
      try {
        this.isTxStarted_ = !0, this.initTransaction_(this.query.tables), this.processExecutionOfQry_();
      } catch (e) {
        this.onExceptionOccured(e);
      }
    }, Instance.prototype.initTransaction_ = function (e) {
      this.createTransaction(e, this.onTransactionCompleted_.bind(this));
    }, Instance.prototype.onTransactionCompleted_ = function () {
      this.onSuccess(this.results);
    }, Instance.prototype.onRequestFinished_ = function (e) {
      var t = this.requestQueue.shift();
      t && (this.error ? (this.abortTransaction_("automatic abort of transaction due to error occured"), this.onErrorOccured(this.error)) : (this.isQueryExecuting = !1, t.onSuccess && t.onSuccess(e), this.processExecutionOfQry_()));
    }, Instance.prototype.abortTransaction_ = function (e) {
      null != this.transaction && this.transaction.abort();
    }, Instance.prototype.executeRequest_ = function (e) {
      var t;

      switch (this.isQueryExecuting = !0, e.name) {
        case _enums__WEBPACK_IMPORTED_MODULE_6__.a.Select:
          t = new _select_index__WEBPACK_IMPORTED_MODULE_1__.a(e.query, this.onRequestFinished_.bind(this), this.onError.bind(this));
          break;

        case _enums__WEBPACK_IMPORTED_MODULE_6__.a.Insert:
          t = new _insert_index__WEBPACK_IMPORTED_MODULE_3__.a(e.query, this.onRequestFinished_.bind(this), this.onError.bind(this));
          break;

        case _enums__WEBPACK_IMPORTED_MODULE_6__.a.Update:
          t = new _update_index__WEBPACK_IMPORTED_MODULE_5__.a(e.query, this.onRequestFinished_.bind(this), this.onError.bind(this));
          break;

        case _enums__WEBPACK_IMPORTED_MODULE_6__.a.Remove:
          t = new _remove_index__WEBPACK_IMPORTED_MODULE_4__.a(e.query, this.onRequestFinished_.bind(this), this.onError.bind(this));
          break;

        case _enums__WEBPACK_IMPORTED_MODULE_6__.a.Count:
          t = new _count_index__WEBPACK_IMPORTED_MODULE_2__.a(e.query, this.onRequestFinished_.bind(this), this.onError.bind(this));
      }

      t.isTransaction = !0, t.execute();
    }, Instance.prototype.pushRequest_ = function (e) {
      var t = this,
          n = function n() {
        t.requestQueue.push(e);
      },
          r = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_11__.a)(function (n, r) {
        e.onSuccess = function (e) {
          n(e);
        }, e.onError = function (e) {
          t.error = e, r(e);
        };
      });

      return !0 === this.isTxStarted_ ? this.checkQueries_([e]).then(function () {
        n(), t.processExecutionOfQry_();
      }).catch(function (e) {
        t.error = e, t.abortTransaction_(JSON.stringify(e));
      }) : n(), r;
    }, Instance.prototype.processExecutionOfQry_ = function () {
      this.requestQueue.length > 0 && !1 === this.isQueryExecuting && this.executeRequest_(this.requestQueue[0]);
    }, Instance.prototype.checkQueries_ = function (e) {
      return Object(_helpers_index__WEBPACK_IMPORTED_MODULE_9__.a)(e.map(function (e) {
        e.query.into || e.query.in;
        return new _query_helper__WEBPACK_IMPORTED_MODULE_7__.a(e.name, e.query).checkAndModify();
      }));
    }, Instance.prototype.getNotExistingTable_ = function (e) {
      var t = this,
          n = null;
      return e.every(function (e) {
        return !1 !== t.isTableExist(e) || (n = e, !1);
      }), n;
    }, Instance;
  }(_base__WEBPACK_IMPORTED_MODULE_0__.a);
}]);