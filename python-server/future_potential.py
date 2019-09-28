from pandas import Timestamp

past_data = [(Timestamp('2019-02-24 00:00:00', freq='7D'), 4995),
(Timestamp('2019-03-03 00:00:00', freq='7D'), 5007),
(Timestamp('2019-03-10 00:00:00', freq='7D'), 5013),
(Timestamp('2019-03-17 00:00:00', freq='7D'), 5017),
(Timestamp('2019-03-24 00:00:00', freq='7D'), 5021),
(Timestamp('2019-03-31 00:00:00', freq='7D'), 5025),
(Timestamp('2019-04-07 00:00:00', freq='7D'), 5033),
(Timestamp('2019-04-14 00:00:00', freq='7D'), 5039),
(Timestamp('2019-04-21 00:00:00', freq='7D'), 5045),
(Timestamp('2019-04-28 00:00:00', freq='7D'), 5059),
(Timestamp('2019-05-05 00:00:00', freq='7D'), 5067),
(Timestamp('2019-05-12 00:00:00', freq='7D'), 5073),
(Timestamp('2019-05-19 00:00:00', freq='7D'), 5075),
(Timestamp('2019-05-26 00:00:00', freq='7D'), 5083),
(Timestamp('2019-06-02 00:00:00', freq='7D'), 5089),
(Timestamp('2019-06-09 00:00:00', freq='7D'), 5089),
(Timestamp('2019-06-16 00:00:00', freq='7D'), 5093),
(Timestamp('2019-06-23 00:00:00', freq='7D'), 5093),
(Timestamp('2019-06-30 00:00:00', freq='7D'), 5099),
(Timestamp('2019-07-07 00:00:00', freq='7D'), 5109),
(Timestamp('2019-07-14 00:00:00', freq='7D'), 5113),
(Timestamp('2019-07-21 00:00:00', freq='7D'), 5115),
(Timestamp('2019-07-28 00:00:00', freq='7D'), 5117),
(Timestamp('2019-08-04 00:00:00', freq='7D'), 5121),
(Timestamp('2019-08-11 00:00:00', freq='7D'), 5133),
(Timestamp('2019-08-18 00:00:00', freq='7D'), 5151),
(Timestamp('2019-08-25 00:00:00', freq='7D'), 5165),
(Timestamp('2019-09-01 00:00:00', freq='7D'), 5171),
(Timestamp('2019-09-08 00:00:00', freq='7D'), 5177),
(Timestamp('2019-09-15 00:00:00', freq='7D'), 5183),
 (Timestamp('2019-09-22 00:00:00', freq='7D'), 5187)]

future_data = [(Timestamp('2019-09-29 00:00:00', freq='7D'), 5190.674978724265),
(Timestamp('2019-10-06 00:00:00', freq='7D'), 5193.81059358181),
(Timestamp('2019-10-13 00:00:00', freq='7D'), 5196.4860051345195),
(Timestamp('2019-10-20 00:00:00', freq='7D'), 5198.7687558234775),
(Timestamp('2019-10-27 00:00:00', freq='7D'), 5200.71647512022),
(Timestamp('2019-11-03 00:00:00', freq='7D'), 5202.378334418851),
(Timestamp('2019-11-10 00:00:00', freq='7D'), 5203.796288398702),
(Timestamp('2019-11-17 00:00:00', freq='7D'), 5205.0061341964965),
(Timestamp('2019-11-24 00:00:00', freq='7D'), 5206.0384151275),
(Timestamp('2019-12-01 00:00:00', freq='7D'), 5206.919191770653),
(Timestamp('2019-12-08 00:00:00', freq='7D'), 5207.670699884214),
(Timestamp('2019-12-15 00:00:00', freq='7D'), 5208.3119117614115),
(Timestamp('2019-12-22 00:00:00', freq='7D'), 5208.859015197875),
(Timestamp('2019-12-29 00:00:00', freq='7D'), 5209.3258221626775),
(Timestamp('2020-01-05 00:00:00', freq='7D'), 5209.724117490151),
(Timestamp('2020-01-12 00:00:00', freq='7D'), 5210.063956395414),
(Timestamp('2020-01-19 00:00:00', freq='7D'), 5210.353918324575),
(Timestamp('2020-01-26 00:00:00', freq='7D'), 5210.601323548229),
(Timestamp('2020-02-02 00:00:00', freq='7D'), 5210.812417966273),
(Timestamp('2020-02-09 00:00:00', freq='7D'), 5210.992530789565),
(Timestamp('2020-02-16 00:00:00', freq='7D'), 5211.146209079188),
(Timestamp('2020-02-23 00:00:00', freq='7D'), 5211.277332539861),
(Timestamp('2020-03-01 00:00:00', freq='7D'), 5211.389211465512),
(Timestamp('2020-03-08 00:00:00', freq='7D'), 5211.484670309722),
(Timestamp('2020-03-15 00:00:00', freq='7D'), 5211.56611899083),
(Timestamp('2020-03-22 00:00:00', freq='7D'), 5211.635613731825)]

def predict_future(user_id):
    normalised_past = []
    normalised_future = []
    start_date = past_data[0][0]
    total_range = (future_data[-1][0] - past_data[0][0]).total_seconds()
    print(total_range)
    min_val = past_data[0][1]
    max_val = 1.5 * (future_data[-1][1] - min_val) / 10
    print(max_val)
    for element in past_data:
        diff = (element[0] - start_date).total_seconds()
        normalised_past.append({'x': 10 * diff / total_range, 'y': (element[1] - min_val) / max_val})
    for element in future_data:
        diff = (element[0] - start_date).total_seconds()
        normalised_future.append({'x': 10 * diff / total_range, 'y': (element[1] - min_val) / max_val})
    return normalised_past, normalised_future


if __name__ == '__main__':
    print(predict_future('ti250'))
