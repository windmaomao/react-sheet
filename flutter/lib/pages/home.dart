import 'package:flutter/material.dart';
import 'setting.dart';
import 'sheet.dart';
import 'stat.dart';
import 'pad.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

const textStyle1 = TextStyle(fontSize: 64);

class _HomeState extends State<Home> {

  void _openSetting({
    BuildContext context, bool fullscreenDialog = false
  }) async {
    final String _settingRes = await Navigator.push(context,
      MaterialPageRoute(
        fullscreenDialog: fullscreenDialog,
        builder: (context) => Setting(),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Math Sheets'),
        leading: IconButton(
          icon: Icon(Icons.dashboard),
          onPressed: () => _openSetting(context: context)
        ),
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.info_outline),
            onPressed: () => showAboutDialog(
              context: context,
              applicationVersion: '0.0.1'
            )
          )
        ]
      ),
      body: Padding(
        padding: EdgeInsets.all(0),
        child: SafeArea(
          child: Container(
            height: MediaQuery.of(context).size.height,
            decoration: BoxDecoration(
              image: DecorationImage(
                  image: AssetImage("images/math-interest.jpg"),
                  fit: BoxFit.cover,
              )
            ),
            child: Column(
              children: <Widget>[
                Sheet(),
                // Stat(),
                Pad(),
              ] 
            ),
          )
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        tooltip: 'Next',
        child: Icon(Icons.arrow_forward),
      ),
    );
  }
}