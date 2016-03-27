// Random generic useless comment that totally helps understanding the code

fullName = app.activeDocument.fullName.toString()
var folder = fullName.substr( 0, fullName.lastIndexOf(".") ).substr( 0, fullName.lastIndexOf("/") )

// Only display error dialogs because this is still interesting
//displayDialogs = DialogModes.ERROR

// Uncomment next line and last line if you for some dumb reason don't have pixels selected as standard ruler
// orgRulerUnits = app.preferences.rulerUnits

// Set ruler to pixels because it'd be stupid to work with anything else
app.preferences.rulerUnits = Units.PIXELS

// Denoise image
/*var rawOpenOptions = new CameraRAWOpenOptions()
rawOpenOptions.settings = CameraRAWSettingsType.CAMERA
rawOpenOptions.luminanceSmoothing = 100
rawOpenOptions.sharpness = 50

var fileRef = new File(fullName)
var docRef = app.open(fileRef, rawOpenOptions)*/

// Downscale width and height by scalar value
var  width = app.activeDocument.width
var height = app.activeDocument.height
var scalar = 4
app.activeDocument.resizeImage( (width/scalar), (height/scalar), app.activeDocument.resolution, ResampleMethod.BICUBICSHARPER )

var jpgFile = new File((fullName+ "_d4x.jpg"))
var jpgSaveOptions = new JPEGSaveOptions()
jpgSaveOptions.embedColorProfile = true
jpgSaveOptions.formatOptions = FormatOptions.PROGRESSIVE
jpgSaveOptions.scans = 3
jpgSaveOptions.matte = MatteType.NONE
jpgSaveOptions.quality = 12

app.activeDocument.saveAs(jpgFile, jpgSaveOptions, true, Extension.LOWERCASE)
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

// Uncomment next line to get your silly non-pixel ruler back again
// app.preferences.rulerUnits = orgRulerUnits