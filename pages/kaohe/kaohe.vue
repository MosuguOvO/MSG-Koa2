<template>
	<view style="background-color: #eee;">
		<view class="top">
			<uni-row class="top-row">
				<uni-col :span="4" class="top-row-col" style="font-weight: 700;"><text>全部</text></uni-col>
				<uni-col :span="4" class="top-row-col"><text>SMT</text></uni-col>
				<uni-col :span="4" class="top-row-col"><text>组装车间</text></uni-col>
				<uni-col :span="4" class="top-row-col"><text>包装车间</text></uni-col>
				<uni-col :span="4" class="top-row-col"><text>加工房</text></uni-col>
				<uni-col :span="4" class="top-row-col"><text>品控中心</text></uni-col>
			</uni-row>
			<text style="padding-left: 35rpx;font-size: 20rpx;">2022年</text>
		</view>
		<view class="charts-box">
			<qiun-data-charts type="column" :opts="opts" :chartData="chartData" />
		</view>
		<view class="body">
			<p style="padding-left: 35rpx;font-size: 20rpx;">类型分布</p>
			<view class="charts-box1">
				<qiun-data-charts type="bar" :opts="opts1" :chartData="chartData1" style="height: 500rpx;" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chartData: {},
				//您可以通过修改 config-ucharts.js 文件中下标为 ['column'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
				opts: {
					color: ['#1890FF', '#91CB74', '#FAC858', '#EE6666', '#73C0DE', '#3CA272', '#FC8452', '#9A60B4', '#ea7ccc'],
					padding: [30, 15, 0, 5],
					enableScroll: false,
					legend: {},
					xAxis: { disableGrid: true },
					yAxis: { data: [{ min: 0 }] },
					dataLabel: false,
					extra: {
						column: {
							type: 'stack',
							width: 30,
							activeBgColor: '#000000',
							activeBgOpacity: 0.08,
						}
					}
				},
				chartData1: {},
				//您可以通过修改 config-ucharts.js 文件中下标为 ['bar'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
				opts1: {
					color: ['#1890FF', '#91CB74', '#FAC858', '#EE6666', '#73C0DE', '#3CA272', '#FC8452', '#9A60B4', '#ea7ccc'],
					padding: [15, 30, 0, 5],
					enableScroll: false,
					legend: {},
					xAxis: {},
					yAxis: {},
					dataLabel: false,
					extra: {
						bar: {
							type: 'stack',
							width: 30,
							meterBorde: 1,
							meterFillColor: '#FFFFFF',
							activeBgColor: '#000000',
							activeBgOpacity: 0.08,
							categoryGap: 1,
						}
					}
				}
			}
		},
		onReady() {
			this.getServerData()
			this.getServerData1()
		},
		methods: {
			getServerData() {
				//模拟从服务器获取数据时的延时
				setTimeout(() => {
					//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
					let res = {
						categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
						series: [{
								name: '物料要求',
								textColor: '#FFFFFF',
								data: [35, 36, 31, 33, 13, 34, 20]
							},
							{
								name: '首件确认',
								textColor: '#FFFFFF',
								data: [18, 27, 21, 24, 6, 28, 20]
							},
							{
								name: '测气抽检',
								textColor: '#FFFFFF',
								data: [18, 27, 21, 24, 6, 28, 20]
							},
							{
								name: '生产异常',
								textColor: '#FFFFFF',
								data: [18, 27, 21, 24, 6, 28, 20]
							},
							{
								name: '品质异常',
								textColor: '#FFFFFF',
								data: [18, 27, 21, 24, 6, 28, 20]
							},
							{
								name: '维修请求-杨春丽',
								textColor: '#FFFFFF',
								data: [18, 27, 21, 24, 6, 28, 20]
							},
							{
								name: '维修请求-武娇',
								textColor: '#FFFFFF',
								data: [18, 27, 21, 24, 6, 28, 20]
							},
							{
								name: '维修请求-黄黎萍',
								textColor: '#FFFFFF',
								data: [18, 27, 21, 24, 6, 28, 20]
							},
							{
								name: '维修请求-张清风',
								textColor: '#FFFFFF',
								data: [18, 27, 21, 24, 6, 28, 20]
							},
							{
								name: '维修请求-李喜莲',
								data: [18, 27, 21, 24, 6, 28, 20]
							},
						]
					}
					this.chartData = JSON.parse(JSON.stringify(res))
				}, 500)
			},
			getServerData1() {
				//模拟从服务器获取数据时的延时
				setTimeout(() => {
					//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
					let res = {
						categories: ['物料要求', '首件确认', '测气抽检', '生产异常', '品质异常', '维修请求-杨春丽', '维修请求-武娇', '维修请求-黄黎萍', '维修请求-张清风',
							'维修请求-李喜莲'
						],
						series: [{
								name: '物料要求',
								textColor: '#FFFFFF',
								data: [660, 0, 0, 0, 0, 0, 0, 0, 0, 0]
							},
							{
								name: '首件确认',
								textColor: '#FFFFFF',
								data: [0, 533, 0, 0, 0, 0, 0, 0, 0, 0]
							},
							{
								name: '测气抽检',
								textColor: '#FFFFFF',
								data: [0, 0, 141, 0, 0, 0, 0, 0, 0, 0]
							},
							{
								name: '生产异常',
								textColor: '#FFFFFF',
								data: [0, 0, 0, 99, 0, 0, 0, 0, 0, 0]
							},
							{
								name: '品质异常',
								textColor: '#FFFFFF',
								data: [0, 0, 0, 0, 76, 0, 0, 0, 0, 0]
							},
							{
								name: '维修请求-杨春丽',
								textColor: '#FFFFFF',
								data: [0, 0, 0, 0, 0, 51, 0, 0, 0, 0]
							},
							{
								name: '维修请求-武娇',
								textColor: '#FFFFFF',
								data: [0, 0, 0, 0, 0, 0, 50, 0, 0, 0]
							},
							{
								name: '维修请求-黄黎萍',
								textColor: '#FFFFFF',
								data: [0, 0, 0, 0, 0, 0, 0, 46, 0, 0]
							},
							{
								name: '维修请求-张清风',
								textColor: '#FFFFFF',
								data: [0, 0, 0, 0, 0, 0, 0, 0, 24, 0]
							},
							{
								name: '维修请求-李喜莲',
								data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 23]
							},
						]
					}
					this.chartData1 = JSON.parse(JSON.stringify(res))
				}, 500)
			},
		}
	}
</script>



<style lang="less" scoped>
	.top {
		height: 100rpx;
		padding-top: 20rpx;

		&-row {

			&-col {
				text-align: center;

				text {
					font-size: 20rpx;
				}
			}
		}
	}

	.body {
		margin-top: 20rpx;
		background-color: white;
	}

	.charts-box {
		background-color: white;
		height: 600rpx;
	}
</style>